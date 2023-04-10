import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Cookies from 'js-cookie';
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
                let tokenData = await response.json()
                console.log(tokenData.token)
                localStorage.setItem("token", tokenData.token)
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
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <div className='title'>
                    <h1 className='text' >SignIn</h1>
                </div>
                <div className='Inputs'>
                    <label className='emailLabel' htmlFor="email">Email :</label>
                    <input className='emailInput' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className='passLabel' htmlFor="password">Password :</label>
                    <input className='passinput' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='submitButton' type="submit">Sign In</button>
                <h4>New user ?</h4>
                <button className='newreg1' onClick={handleRegisterSubmit}>Register Here</button>
            </form>
        </div>
    );
};

export default SignIn;

