import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error('Something went wrong')
    }

    if (user) {
        navigate(from)
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border border-2 rounded-pill w-50 mx-auto horizontal-line'></div>
                <p className='my-0 px-2'>or</p>
                <div className='border border-2 rounded-pill w-50 mx-auto horizontal-line'></div>
            </div>
            <div className='text-center my-4'>
                <button onClick={() => signInWithGoogle()} className='w-25 p-2 border mx-3 rounded-pill text-primary'>
                    <Google></Google>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;