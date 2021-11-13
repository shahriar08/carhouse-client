import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    // const {
    //     register,
    // } = useForm();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    // useEffect(() => {
    //     if (!isEmpty(user)) {
    //         let path = location.state && location.state.from && location.state.from.pathname;
    //         path = path ?? "/home";
    //         history.push(path);
    //     }

    // }, [user]);

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

    return (
        // <div className='login-form'>
        //     <form className='shipping-form' onSubmit={signInUsingForm}>
        //         <h2 className='mt-5'>Please Login</h2>
        //         <input name="email" placeholder='Your Email Address' {...register("email", { required: true })} />
        //         <input name="password" placeholder='Password' {...register("password", { required: true })} />
        //         {error && <p style={{ color: "red" }}>{error}</p>}
        //         <input className='btn btn-danger' type="submit" value="Submit" />
        //         <br />
        //         <button type="button" className='btn btn-warning my-auto' onClick={handleGoogleLogin}>Google sign in</button>
        //         <br />
        //         <p className='footer-bottom mt-2'>New to MediCare? <Link to="/register">Create Account</Link></p>
        //     </form>
        // </div>


        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
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

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <Button type="button" variant="contained" onClick={handleGoogleLogin}>Google sign in</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;