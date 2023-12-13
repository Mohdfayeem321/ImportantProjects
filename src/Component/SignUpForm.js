import React, { useState } from 'react';

import './SignUpForm.css';

import beauty from '../image/beauty.jpg';

import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios';

function SignUpForm() {

    const [data, setData] = useState({});

    const handleChange = (e) => {

        let { value, name } = e.target;

        let inputs = { [name]: value }

        setData({ ...data, ...inputs });

        console.log(data);
    }

    // Handle Submit Function For Submit User Data;

    const handleSubmit = async (e) => {

        try {


            e.preventDefault();

            // If pass and confirm pass mismatched;

            if (data.password !== data.confirmPassword) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'The entered passwords do not match. Please try again.',
                });
            };

            console.log(data);

            const response = await axios.post('http://localhost:5000/sign-up', data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.status) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data.msg
                });
            };

        } catch (error) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.msg
            });
        }
    };
    return (
        <div className='container'>
            <div className="inner-container">
                <div className="picture">
                    <img src={beauty} alt="img" />
                    <div className="inner-div">
                        <h1 className='calci'>Scientific Calci</h1>
                        <div className="calci-bar">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quaerat dolor temporibus suscipit, odio, neque nemo consequuntur ea commodi optio provident nobis quos laborum illo, voluptatibus iste magnam expedita. Itaque!</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="sign-in-btn">
                        <button className='sign-in'>SIGN IN</button>
                    </div>
                    <h1>Explore & Experience</h1>
                    <h5>Get onto your most comfortable journey yet. All the way up.</h5>
                    <form action="submit" className='submit' onSubmit={handleSubmit}>
                        <div className="firstName">
                            <input type="text" name='firstname' onChange={handleChange} placeholder='First Name' />
                            <input type="text" name='lastname' onChange={handleChange} placeholder='Last Name' />
                        </div>
                        <div className="inner-submit-div">
                            <input type="email" name='email' onChange={handleChange} placeholder='Email' />
                            <input type="text" name='username' onChange={handleChange} placeholder='Username' />
                            <input type="password" name='password' onChange={handleChange} placeholder='Password' />
                            <input type="text" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' />
                            <button className='submit-button'>GET STARTED</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUpForm;


