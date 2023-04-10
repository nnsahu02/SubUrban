import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUp.css'

const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, phone, password };

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('SignUp form submitted successfully!')
                navigate('/signin')
                console.log('Form data submitted successfully!');
            } else {
                alert('Error submitting form data')
                console.error('Error submitting form data');
            }
        } catch (err) {

            console.error('Network error:', err);
        }
    };

    function handleSignInSubmit() {
        navigate('/signin');
    }

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <div className='title'>
                    <h1 className='text' >Signup</h1>
                </div>
                <div className='Inputs'>
                    <label className='NameLabel' htmlFor="name">Name :</label>
                    <input className='NameInput' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label className='emailLabel' htmlFor="email">Email :</label>
                    <input className='emailInput' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className='phoneLabel' htmlFor="phone">Phone :</label>
                    <input className='phoneinput' type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                    <label className='passLabel' htmlFor="password">Password :</label>
                    <input className='passinput' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='submitButton' type="submit">Sign Up</button>
                <h4>Already have an account.</h4>
                <button className='newreg1' onClick={handleSignInSubmit}>Signin Here</button>
            </form>
        </div>
    );
};

export default SignUp;
