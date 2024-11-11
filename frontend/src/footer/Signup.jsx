import { Button, TextField, Typography, Box, Link } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',  // using "email" to match the backend schema
    password: '',
    address: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const sendData = async () => {
    try {
      const res = await axios.post('http://localhost:3000/user/register', user);
      alert(res.data.message);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const backendErrors = error.response.data.errors.reduce((acc, curr) => {
          acc[curr.param] = curr.msg;
          return acc;
        }, {});
        setErrors(backendErrors);
      } else {
        alert(error.response?.data?.message || 'Signup failed, please try again.');
      }
    }
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
        <Typography variant="h5" color="#333" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          id="name"
          label="Your Name"
          variant="outlined"
          name="name"
          value={user.name}
          onChange={updateUser}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          margin="normal"
        />
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          name="email"
          value={user.email}
          onChange={updateUser}
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
          margin="normal"
        />
        
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          name="phone"
          value={user.phone}
          onChange={updateUser}
          error={!!errors.phone}
          helperText={errors.phone}
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
              backgroundColor: '#555'
            },
            color: '#fff'
          }}
        >
          Continue
        </Button>
        <Box display="flex" flexDirection="column" alignItems="center" marginTop="1rem">
          <Typography variant="body2">
            Already have an account?{' '}
            <Link href="/login" underline="none" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
