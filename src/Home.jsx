import React from 'react';
import Footer from './Pages/Footer/Footer';
import About from './Pages/Home/About/About';
import Banner from './Pages/Home/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Footer />
        </div>
    );
};

export default Home;