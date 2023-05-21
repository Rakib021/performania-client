import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)

    }
    if (error) {
        return toast.error(error.message)
    }
    if (loading) {
        return <Loading></Loading>
    }
    console.log(user);
    if (user) {

        const url = 'https://perfumania-server.onrender.com/login'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken)
                navigate(from, { replace: true });
            });



        toast.success('Login successful', { id: 'sajid' })
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast.success('Mail sent', { id: 'sajid' })
        }
        else {
            toast.error('Please enter your mail', { id: 'sajid' })
        }
    }


    return (
        <div>
            <Form onSubmit={handleLogin} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>

            </Form>
            <div className='mt-3'>
                <p className='text-center'>New to Perfumania? <Link to='/signup'>SignUp</Link></p>
                <p className='text-center'>Forget password?<button onClick={resetPassword} className='text-primary text-decoration-none btn btn-link'>reset password</button></p>
            </div>
        </div>
    );
};

export default Login;