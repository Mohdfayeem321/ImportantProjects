import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { TextField, Button, Container, Typography, Paper } from '@mui/material';

import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios';

const SignUpForm = () => {

    // Navigation start here

    const navigate = useNavigate();

    function login() {

        navigate('/')
    }

    // Navigation end here


    const [data, setData] = useState({});

    const handleChange = (e) => {

        let { value, name } = e.target;

        let inputs = { [name]: value }

        setData({ ...data, ...inputs });
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
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        name="username"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Confirm Password"
                        name="confirmPassword"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Sign Up
                    </Button>
                </form>
                <Button onClick={login}>
                    Login
                </Button>
            </Paper>
        </Container>
    );
};

export default SignUpForm;
