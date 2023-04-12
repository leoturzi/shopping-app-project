import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Announcement from '../components/Announcement';

function Home() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Hero />
        </>
    );
}

export default Home;
