import { Game } from "../../interfaces/Games";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface GameState {
  games: Game[] | null;
  singleGame: Game | null;
  loading: boolean;
  error: any;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  error: null,
};

// ACTIONS
export const getGames = createAsyncThunk<Game[]>(
  "games/getGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8000/api/games");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getGameById = createAsyncThunk<string, Game>(
    "games/getGameById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.post(
                `http://localhost:8000/api/games/game/${id}`,
            );
            return response.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)   

export const createGame = createAsyncThunk<Object, Game>(
  "games/createGame",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/games/game",
        data
      );
      thunkAPI.dispatch(getGames());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// REDUCERS (which handle the state)
export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { setGames } = gameSlice.actions;
