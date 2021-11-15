import { Avatar, Box, Card, CardActionArea, Container, Grid, Typography } from '@mui/material';

import React from 'react';

const WhyChooseUs = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 700,pt:5, m: 5, textAlign: 'center', color: '#17B978' }} variant="h3" component="div">
                    Why Choose Us?
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Card sx={{ width: 275, border: 0,p:2, boxShadow: 1,height:250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 56, height: 56, mx: 'auto' }} alt="Remy Sharp" src="https://i.ibb.co/jrXQsp9/person.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    Trusted By Our Clients
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our best thing is that our customer trusted us and again purchase from us.So You choose easily and find your dream car from us.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Card sx={{ width: 275, border: 0,p:2, boxShadow: 1,height:250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 56, height: 56, mx: 'auto' }} alt="Remy Sharp" src="https://i.ibb.co/8g3kdfz/award.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    Wide Range of Brands
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We can help with your financing plan.We also provide some tips and  tricks.Drive off with this dream car of yours regardless of your credit history.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Card sx={{ width: 275, border: 0,p:2, boxShadow: 1, alignItems: 'center',height:250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 56, height: 56, mx: 'auto' }} alt="Remy Sharp" src="https://i.ibb.co/MZfd4yc/payment.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                Fast & Easy Payment 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our payment system is really very smooth.From purchase to payment you will be happy by our service.
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
