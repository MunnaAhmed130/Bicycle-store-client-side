import { Alert, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
    const { user, error, signInWithGoogle, loginWithEmail, loading } = useAuth();
    const history = useNavigate();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        loginWithEmail(data.email, data.password, location, history);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <Header />
            <div className="login text-center">
                <h2 className="login-heading">Please Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder='Your Email' required="required" /> <br />
                    <input {...register("password")} type='password' placeholder='Your Password' required="required" /> <br />
                    <Link to='/register'>New User? Please Register</Link> <br />
                    <Button className="login-btn m-3" variant='contained' type="submit" >Login</Button>
                </form>
                {loading && <div>
                    <CircularProgress /> <br />
                </div>}
                {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <Button onClick={handleGoogleSignIn} variant='contained'>Google sign In</Button>
            </div>
            <Footer />
        </div>
    );
};

export default Login;