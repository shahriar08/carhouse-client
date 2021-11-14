import { Box, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const PopularBrands = () => {
    return (
        <Box>
            <Container >
                <Typography sx={{ fontWeight: 600,p:5, m: 5, textAlign: 'center',color: '#17B978' }} variant="h3" component="div">
                    Our Popular Brands
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        // height='155'
                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/7NY8mDs/Bentley.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"

                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/VMNj9tB/BMW.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/TY9fFTn/Jaguar.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/SNhDGBF/Nissan-1.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/kSvrRCx/Porsche-1.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box>
                            <Card sx={{ minWidth: 85, border: 0, boxShadow: 3 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '1', height: '160px', margin: '0 auto' }}
                                        image="https://i.ibb.co/sJbybMC/Rolls-Royce.jpg"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default PopularBrands;


