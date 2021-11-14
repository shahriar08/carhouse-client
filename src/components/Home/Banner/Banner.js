import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import car from './car-silver.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{ my: 3, fontWeight: 700, color: '#17B978' }} variant="h3">
                            Find Your Dream Car <br />
                        </Typography>
                        <Typography sx={{ my: 3, fontWeight: 600, color: 'black' }} variant="h4">
                            From Us
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeight: 400, color: 'gray' }}>
                            We can help you find the best car, <br />
                            Check our latest brand new car and <br />
                            get our best support from us.
                        </Typography>
                        <Button variant="contained" sx={{ mx: "auto", width: 150 ,p:1}} style={{ backgroundColor: '#17B978' }}>Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={car} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Banner;