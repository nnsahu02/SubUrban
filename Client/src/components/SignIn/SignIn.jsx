import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './SignIn.css'

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { email, password };

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                Cookies.set('token', token);
                alert('successfully loggedIn');
                navigate('/products');
            } else {
                alert('Invalid credentials');
            }
        } catch (err) {
            console.error('Network error:', err);
            alert('Error signing in');
        }
    };

    function handleRegisterSubmit() {
        navigate('/signup');
    }

    return (
        <div className="SignIn">
            <h2 className='title'>Sign In</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label className='email' htmlFor="email">Email</label>
                    <input className='emailInput' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className='password' htmlFor="password">Password</label>
                    <input className='passwordInput' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='submit' type="submit">Sign In</button>
                <h3>New user</h3>
                <button className='newreg' onClick={handleRegisterSubmit}>Register Here</button>
            </form>
        </div>
    );
};

export default SignIn;

