
import { Alert, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import FooterBottom from '../../Shared/FooterBottom/Footer';
import Header from '../../Shared/Header/Header';
import './Register.css';

const Register = () => {
    const { user, error, loading, registerWithEmail } = useAuth();
    const history = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.password2) {
            alert('your password did not match')
            return
        }
        registerWithEmail(data.email, data.password, data.name, history);
        console.log(user)
    };
    return (
        <div>
            <Header />
            <h2 className="register-heading text-center">Please Register</h2>
            {!loading &&
                <form className="register-form text-center" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder="Your name" required="required" /> <br />
                    <input {...register("email", { required: true })} placeholder="Your email" required="required" /> <br />
                    <input type="password" {...register("password", { required: true })} placeholder="Your password" required="required" /> <br />
                    <input type="password" {...register("password2", { required: true })} placeholder="Confirm your password" required="required" /> <br />
                    <Link to='/login'>Already Registered? Login</Link> <br />
                    <Button className="mb-3" variant="contained" type="submit">Register</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </form>}
            {loading && <div className='circle'>
                <CircularProgress /> <br />
            </div>}
            {user?.email && <div className='circle'>
                <Alert severity="success" >This is a success alert ??? check it out!</Alert>
            </div>}

            {!loading && <Footer />}
            {loading && <FooterBottom />}
        </div>
    );
};

export default Register;