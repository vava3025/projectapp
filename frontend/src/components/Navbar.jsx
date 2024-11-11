import React, { useState } from 'react';
import { AppBar, Box, Button, Badge, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'react-feather';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const cartItemCount = 0; // Example cart item count
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Redirect to /search page with query
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#257180' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <img
              src="https://img.freepik.com/premium-vector/fashion-store-logo-design-vector_18099-2339.jpg"
              alt="Fashion Store Logo"
              style={{ width: '60px', height: '60px' }}
            />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          {/* Category Navigation Buttons */}
          <Link to="/women"><Button sx={{color: '#4CAF50'}} style={{backgroundColor: 'white', marginLeft: '10px'}}>Women</Button></Link>
          <Link to="/men"><Button sx={{color: '#4CAF50'}} style={{backgroundColor: 'white', marginLeft: '10px'}}>Men</Button></Link>
          <Link to="/kids"><Button sx={{color: '#4CAF50'}} style={{backgroundColor: 'white', marginLeft: '10px'}}>Kids</Button></Link>
          <Link to="/all"><Button sx={{color: '#4CAF50'}} style={{backgroundColor: 'white', marginLeft: '10px'}}>All Products</Button></Link>

          {/* Search Bar */}
          {/* <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: 1 }}
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary" type="submit">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </form> */}

          <Link to="/login"><Button sx={{color: '#4CAF50'}} style={{backgroundColor: 'orange', marginLeft: '5px'}}>Login</Button></Link>
          <IconButton color="inherit" component={Link} to="/cart" sx={{ marginLeft: '10px' }}>
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
