import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;