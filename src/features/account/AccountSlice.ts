import axios from "axios";
import { User } from "../../interfaces/User";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface AccountState {
    loading: boolean;
    user: User | null;
    error: Error[] | any;
    isAuth: boolean;

}

const initialState: AccountState = {
    loading: false,
    user: null,
    error: [],
    isAuth: false,

};

export const signupUser = createAsyncThunk<(User | any), User, any>(
    'account/signupUser',
    async (data: User, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/signup', data);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.response.data});
        }
    }
)

export const loginUser = createAsyncThunk<User|any, Object>(
    'account/loginUser',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', data);
            const {token} = response.data;
            localStorage.setItem('token', token);
            toast.success('Login successful');
            thunkAPI.dispatch(setLoggedIn(true));
            return token;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.response.data});
        }
    }   
)

export const getCurrentUser = createAsyncThunk<User|any, void>(
    'account/getCurrentUser',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) {
                thunkAPI.dispatch(setLoggedIn(false));
                 thunkAPI.rejectWithValue({error: 'No token, authorization denied'});
                const response = await axios.get('http://localhost:8000/api/auth/me', {
                    headers: {
                        "Authorization": token
                    }
            });
            if(response.data) {
                thunkAPI.dispatch(setLoggedIn(true));
                return response.data;
            } else {
                thunkAPI.dispatch(setLoggedIn(false));
                return;
            }
        }
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.response.data});
        }
    }
)


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setLoggedIn: (state: { isAuth: boolean; }, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        }
    },
    extraReducers: {
        [signupUser.pending.type]: (state) => {
            state.loading = true;
        }
        ,
        [signupUser.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = [];
        }
        ,
        [signupUser.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }
        ,
        [loginUser.pending.type]: (state) => {
            state.loading = true;
        }
        ,
        [loginUser.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = [];
        }
        ,
        [loginUser.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        }
    }
});

export const {setLoggedIn} = accountSlice.actions;

export default accountSlice.reducer;

