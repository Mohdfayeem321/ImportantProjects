import React, { useState } from 'react';

import { TextField, Button, Container, Typography, Paper } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    function signUp() {

        navigate('/sign-up')
    }

    const [data, setData] = useState({});

    const handleChange = (e) => {

        let { value, name } = e.target;

        let inputs = { [name]: value }

        setData({ ...data, ...inputs });
    }

    const handleSubmit = async (e) => {

        try {

            e.preventDefault();

            const response = await axios.post('http://localhost:5000/login', data,
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
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username / Email"
                        name="username"
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
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Login
                    </Button>
                    <Button onClick={signUp}>
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Login;