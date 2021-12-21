import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CountUp from 'react-countup';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Counting = () => {
    return (
        <Container sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{ my: 3, fontWeight: 700, color: '#17B978' }} variant="h4">
                            Welcome To The Car House<br />
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeight: 400, color: 'gray' }}>
                            We can help you find the best car, <br />
                            Check our latest brand new car and <br />
                            get our best support from us.
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >

                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Card sx={{ width: 200, border: 0, boxShadow: 0, backgroundColor: '#fff', height: 270 }}>
                                <Typography sx={{ fontWeight: 700, m: 1, color: '#185ADB', textAlign: 'center' }} variant="h6" component="div">
                                    VEHICLES STOCK
                                </Typography>
                                <Typography sx={{ fontWeight: 500, m: 1, color: 'black', textAlign: 'center' }} variant="h3" color="red">
                                    <CountUp start={0} end={1193} duration={2} separator=',' />
                                </Typography>
                                <Typography sx={{ fontWeight: 500, color: '#185ADB', textAlign: 'center' }} variant="h6" component="div">
                                    HAPPY CUSTOMER
                                </Typography>
                                <Typography sx={{ fontWeight: 500, m: 1, color: 'black', textAlign: 'center' }} variant="h3" color="red">
                                    <CountUp start={0} end={3190} duration={2} separator=',' />
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Card sx={{ width: 200, border: 0, boxShadow: 0, backgroundColor: '#fff', height: 270 }}>

                                <Typography sx={{ fontWeight: 500, m: 1, color: '#185ADB', textAlign: 'center' }} variant="h6" component="div">
                                    CUSTOMER REVIEW
                                </Typography>

                                <Typography sx={{ fontWeight: 500, m: 1, color: 'black', textAlign: 'center' }} variant="h3" color="red">
                                    <CountUp start={0} end={1764} duration={2} separator=',' />
                                </Typography>
                                <Typography sx={{ fontWeight: 500, m:1, color: '#185ADB', textAlign: 'center' }} variant="h6" component="div">
                                    AWARDS
                                </Typography>

                                <Typography sx={{ fontWeight: 500, m: 1, color: 'black', textAlign: 'center' }} variant="h3" color="red">
                                    <CountUp start={0} end={343} duration={2} separator=',' />
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Container>

    );
};

export default Counting;