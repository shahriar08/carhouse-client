import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from './logo.png'
const Footer = () => {
    return (
        <Box sx={{mt:5}} px={{ xs: 3, sm: 10 }} py={{xs: 5, sm:10 }} backgroundColor='#393E46' color="white"> 
            <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={4} color="white">
                        <Box sx={{fontWeight: 'bold',fontSize: 20}} borderBottom={1}>Car House</Box>
                        <Box>Address:25, Kazi Ahsanaullah Road.</Box>
                        <Box>Dhaka.</Box>
                        <Box>015555555</Box>
                        <Box>carhouse@car.com</Box>


                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{fontWeight: 'bold',fontSize: 20}} borderBottom={1}>Help</Box>
                        <Box>Home</Box>
                        <Box>Car Collection</Box>
                        <Box>About Us</Box>
                        <Box>Contact Us</Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{fontWeight: 'bold',fontSize: 20}} borderBottom={1}>About US</Box>
                        <Box>Why Us?</Box>
                        <Box>Our Happy Client</Box>
                        <Box>Find Car</Box>
                        <Box>Contact us</Box>
                    </Grid>
                </Grid>

                <Box textAlign="center" pt={{xs:5, sm:10}} pb={{}}>Car House &reg; {new Date().getFullYear()}</Box>
            </Container>
        </Box>
    );
};

export default Footer;