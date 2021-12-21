import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Container } from '@mui/material';

import './Blog.css'
const Blog = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 700, pt: 5, m: 5, textAlign: 'center', color: '#17B978' }} variant="h3" component="div">
                    Latest Blogs
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                style={{ width: '1', height: '260px', margin: '0 auto' }}
                                image="https://i.ibb.co/0ZwtQnx/251-porsche-taycan-1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="div">
                                    Porsche Will New Electrical Car
                                </Typography>
                                <Typography variant="body2" color="black">
                                    Date: 12 Dec,2021
                                </Typography>
                                <Typography>
                                    <Button sx={{ mt: 1 }} style={{ backgroundColor: '#17B978', color: '#fff' }} variant="contained">Read More</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                style={{ width: '1', height: '260px', margin: '0 auto' }}
                                image="https://i.ibb.co/PGLxHZ4/598762.jpg"
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography sx={{ fontWeight: 'bold' }} variant="h5" color="black">
                                    Community Edition Released
                                </Typography>
                                <Typography variant="body2" color="black">
                                    Date: 19 Dec,2021
                                </Typography>
                                <Typography>
                                    <Button sx={{ mt: 1 }} style={{ backgroundColor: '#17B978', color: '#fff' }} variant="contained">Read More</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;