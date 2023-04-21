import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

function Home() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Hero />
            <Categories />
            <Products />
            <Newsletter />
        </>
    );
}

export default Home;
