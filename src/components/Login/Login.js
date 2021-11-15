import React, { useEffect, useState } from 'react';
import { isEmpty } from "lodash";
import {NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Grid } from '@mui/material';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUsingGoogle, user,signInUsingForm, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        signInUsingForm(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    useEffect(() => {
        if (!isEmpty(user)) {
            let path = location.state && location.state.from && location.state.from.pathname;
            path = path ?? "/home";
            history.push(path);
        }

    }, [user]);

    return (
        <Container>
            <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>Login Here</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />

                        <Button style={{ backgroundColor: '#17B978', color: '#fff' }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <br />
                        <Button sx={{ width: '75%', m: 1 }} style={{ backgroundColor: '#17B978', color: '#fff' }}  type="button" variant="contained" onClick={handleGoogleLogin}>Google sign in</Button>
                        <br />
                        <NavLink 
                            style={{ textDecoration: 'none' ,textAlign: 'center'}}
                            to="/register">
                            <Button style={{ color: '#17B978',m:2 }} variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;