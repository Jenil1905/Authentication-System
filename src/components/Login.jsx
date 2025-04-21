import React, { useState } from 'react';
import { signUp, login } from '../services/authService';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    function toggleForm() {
        setIsSignUp(!isSignUp);
        setError('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            if (isSignUp) {
                await signUp(email, password);
                alert('Account Created! Please log in.');
                setIsSignUp(false);
            } else {
                await login(email, password);
                alert('Login Successful!');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='place-items-center m-35'>
            <div className='border-solid border-black-100 border-3 h-85 w-165 rounded-md shadow-lg shadow-black flex'>
                <div className='w-159'
                    style={{
                        transform: isSignUp ? "translateX(205px)" : "translateX(0)",
                        transition: "transform 0.5s ease-in-out",
                        textAlign: "center",
                        backgroundColor: "white"
                    }}
                >
                    <h1 className='italic text-3xl font-serif m-2'>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
                    <form className='flex flex-col mt-9' onSubmit={handleSubmit}>
                        {isSignUp && (
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='m-2 border-solid border-black-100 border-3 rounded-sm w-100 h-9'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        )}
                        <input
                            type='email'
                            placeholder='Enter E-mail'
                            className='m-2 border-solid border-black-100 border-3 rounded-sm w-100 h-9'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='m-2 border-solid border-black-100 border-3 rounded-sm w-100 h-9'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

                        <div className='mt-4 flex flex-col place-items-center'>
                            {!isSignUp && (
                                <button className='italic font-serif text-blue-900 text-sm hover:cursor-pointer mb-2 mt-3'>Forgot Password?</button>
                            )}
                            <button type="submit" className='italic font-serif font-bold m-2 border-solid border-black-100 border-3 rounded-xl w-100 p-2 hover:cursor-pointer hover:scale-105 mt-4'>
                                {isSignUp ? "Create Account" : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className='bg-black h-84 w-72 rounded-md place-items-center'
                    style={{
                        transform: isSignUp ? "translateX(-451px)" : "translateX(0)",
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    <h1 className='text-2xl text-white font-serif italic m-2 font-bold'>{isSignUp ? "One of us?" : "New here?"}</h1>
                    <p className='text-white font-serif italic m-2'>{isSignUp ? "Just login" : "Sign up and discover!"}</p>
                    <button className='font-serif border-solid border-white border-3 rounded-xl w-40 p-2 hover:cursor-pointer mt-35 text-white' onClick={toggleForm}>
                        {isSignUp ? "Login" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
