import { Button, TextField, Typography, Box, Link } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    axios.post('http://localhost:3000/user/login', user)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === 'Login successful') {
          navigate('/'); // Redirect to the home page or dashboard
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((err) => {
        console.error('Login error', err);
        alert('Invalid Credentials');
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="1px solid #ddd"
        borderRadius="8px"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
        padding="3rem"
        width="320px"
        bgcolor="#fff"
      >
        <Typography variant="h5" component="div" color="#333" gutterBottom>
          Login
        </Typography>
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={updateUser}
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={user.password}
          onChange={updateUser}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={sendData}
          fullWidth
          sx={{
            marginTop: '1rem',
            backgroundColor: '#333',
            '&:hover': {
              backgroundColor: '#555',
            },
            color: '#fff',
          }}
        >
          Continue
        </Button>
        <Box display="flex" flexDirection="column" alignItems="center" marginTop="1rem">
          <Typography variant="body2">
            Create an account?{' '}
            <Link href="/signup" underline="none" color="primary">
              Click here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
