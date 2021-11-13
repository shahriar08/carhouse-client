import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { isEmpty } from "lodash";
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { signInUsingGoogle, user,signupUsingForm, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // const {
    //     register,
    // } = useForm();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        signupUsingForm(loginData.email, loginData.password,loginData.name,history);
        e.preventDefault();
    }

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
    return (
        // <div className='login-form'>
        //     <form className='shipping-form' onSubmit={signupUsingForm}>
        //         <h2>Please Register</h2>
        //         <input placeholder='Your Name' {...register("name", { required: true })} />
        //         <input placeholder='Your Phone Number' {...register("phone", { required: true })} />
        //         <input placeholder='Your Email Address' {...register("email", { required: true })} />
        //         <input placeholder='Password' {...register("password", { required: true })} />
        //         {error && <p style={{ color: "red" }}>{error}</p>}
        //         <input className='btn btn-danger' type="submit" value="Submit" />
        //         <br />
        //         <button type="button" className='btn btn-warning ms-1 my-auto' onClick={handleGoogleLogin}>Google sign in</button>
        //         <br />
        //         <p>New to MediCare?<Link to='/login'>Already Registered?</Link></p>
        //     </form>

        // </div>

        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <Button type="button" variant="contained" onClick={handleGoogleLogin}>Google sign in</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
                </Grid>
            </Grid>
        </Container>

    );
};

export default Register;