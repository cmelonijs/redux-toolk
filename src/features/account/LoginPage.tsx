import { Button, Container, Grid, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./AccountSlice";
import { useAppDispatch } from "../../store/store";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const dispatch = useAppDispatch()

    const handleSubmit = (e:any) => {
        e.preventDefault();
        dispatch(loginUser(user));
    }

  return <div className="login-body">
    <Container sx={{py: 10, margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
        <Grid className="login-container" container spacing={3} sx={{margin: '0 auto', backgroundColor: 'white'}}>
            <Typography className="title" variant="h3" sx={{m: '80 auto 0 auto', fontWeigh: '600'}}>Login</Typography>
            <Grid item xs={12}>
                <Input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email" type="email" className="login-input" />
                <Input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}  placeholder="password" type="password" className="login-input" />
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={handleSubmit} fullWidth>Login</Button>
                </Grid>
                <Grid item sx={{my: 3}}>
                    <Link to="/signup">Registrati</Link>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  </div>;
};

export default LoginPage;