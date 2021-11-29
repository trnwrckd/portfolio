import React from 'react';
import ContactBtn from '../../../Shared/ContactBtn/ContactBtn';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <About/>
            <Projects />
            <ContactBtn></ContactBtn>
            <Footer/>
        </div>
    );
};

export default Home;