import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const Header = () => {
    const items = [
        {
            image: 'https://img.freepik.com/premium-photo/summer-sale-with-special-offer_1230717-145227.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid',
            title: 'Summer Sale',
            description: 'Get flat 30% off for new arrivals',
        },
        {
            image: 'https://img.freepik.com/premium-photo/two-beautiful-friends-looking-dress-shop_359031-332.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid',
            title: 'New Collection',
            description: 'Explore our latest collection',
        },
        {
            image: 'https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19713.jpg?ga=GA1.1.2038471847.1724312526',
            title: 'Formal Wear',
            description: 'Explore our latest collection',
        },
        {
            image: 'https://img.freepik.com/free-photo/autumn-fashion-portrait-happy-blonde-woman-red-stylish-coat-knitted-hat-walking-park_273443-1594.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid',
            title: 'Autumn collections',
            description: 'Explore our latest collection',
        }





    ];


    return (
        <Container className="home-page">
            {/* Banner Section */}
            <div className="heading">
                <h1>WELCOME TO FASHION STORE</h1>
            </div>
            
    

            {/* Carousel Slider */}
            <Carousel
                indicators={true}
                navButtonsAlwaysVisible={true}
                className="carousel"
            >
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={item.image} alt={item.title} className="carousel-image" />
                        <div className="carousel-caption">
                            <Typography variant="h4">{item.title}</Typography>
                            <Typography>{item.description}</Typography>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Categories Section */}
            <div className="categories">
                <Typography variant="h5" className="categories-title">Popular Categories</Typography>
                <div className="category-items">
                    <div className="category">
                        <img src="https://img.freepik.com/premium-photo/women-s-fashion-store-shopping-mall_1112-8146.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid" alt="Women" />
                        <Link to="/women">
                            <Button variant="contained">Shop Women</Button>
                        </Link>
                    </div>
                    <div className="category">
                        <img src="https://img.freepik.com/premium-photo/young-man-standing-choosing-clothes-store_935589-11891.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid" alt="Men" />
                        <Link to="/men">
                            <Button variant="contained">Shop Men</Button>
                        </Link>
                    </div>
                    <div className="category">
                        <img src="https://img.freepik.com/free-photo/girl-holding-shopping-bags-choosing-pink-dress_7502-4256.jpg?ga=GA1.1.2038471847.1724312526&semt=ais_hybrid" alt="Kids" />
                        <Link to="/kids">
                            <Button variant="contained">Shop Kids</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;
