import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Projects/>
            <Contact></Contact>
            <Footer/>
        </div>
    );
};

export default Home;