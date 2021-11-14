import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PopularBrands from '../../PopularBrands/PopularBrands';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';
import Banner from '../Banner/Banner';
import CarCollections from '../CarCollections/CarCollections';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner/>
            <CarCollections limit={6}/>
            <Testimonial/>
            <PopularBrands/>
            <WhyChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;