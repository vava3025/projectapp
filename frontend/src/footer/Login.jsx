import { Button, TextField, Typography, Box, Link, Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Email } from '@mui/icons-material';

const Login = () => {
  const [user, setUser] = useState({
    emails: '',
    password: ''
  });
  const navigate=useNavigate()
  let updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let sendData = () => {
    axios.post('http://localhost:3000/login/view', user)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "Login successful") {
          navigate('/'); // or wherever you want to redirect
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Login error", err);
        alert("An error occurred");
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
          name="emails"

          value={user.emails}
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
          // href='/'
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

