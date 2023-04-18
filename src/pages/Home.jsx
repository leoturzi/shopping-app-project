import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';

function Home() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Hero />
            <Categories />
        </>
    );
}

export default Home;
