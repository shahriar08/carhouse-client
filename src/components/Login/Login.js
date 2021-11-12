import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from "lodash";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, signInUsingForm, user, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const {
        register,
    } = useForm();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    useEffect(() => {
        if (!isEmpty(user)) {
            let path = location.state && location.state.from && location.state.from.pathname;
            path = path ?? "/home";
            history.push(path);
        }

    }, [user]);

    // const handleOnChange=e=>{
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     console.log(field,value);
    // }

    return (
        <div className='login-form'>
            <form className='shipping-form' onSubmit={signInUsingForm}>
                <h2 className='mt-5'>Please Login</h2>
                <input name="email" placeholder='Your Email Address' {...register("email", { required: true })} />
                <input name="password" placeholder='Password' {...register("password", { required: true })} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input className='btn btn-danger' type="submit" value="Submit" />
                <br />
                <button type="button" className='btn btn-warning my-auto' onClick={handleGoogleLogin}>Google sign in</button>
                <br />
                <p className='footer-bottom mt-2'>New to MediCare? <Link to="/register">Create Account</Link></p>
            </form>
        </div>
    );
};

export default Login;