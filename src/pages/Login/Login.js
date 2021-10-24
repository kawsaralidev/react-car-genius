import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth()
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={googleSignIn} className="bg-primary p-1 rounded ">Google sign in</button>
        </div>
    );
};

export default Login;