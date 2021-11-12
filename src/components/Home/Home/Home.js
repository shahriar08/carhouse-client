import React from 'react';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import CarCollections from '../CarCollections/CarCollections';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner/>
            <CarCollections/>
        </div>
    );
};

export default Home;