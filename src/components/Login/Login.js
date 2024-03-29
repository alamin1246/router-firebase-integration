import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Enter Your Email' />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Login" />
                <br />
            </form>
        </div>
    );
};

export default Login;