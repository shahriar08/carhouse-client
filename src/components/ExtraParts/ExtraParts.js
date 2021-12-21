import React from 'react';
import Card from '@mui/material/Card';
import { Avatar, Box, CardActionArea, Container, Grid, Typography } from '@mui/material';
import './ExtraParts.css'

const ExtraParts = () => {
    return (
        <Box sx={{my:5}}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Card sx={{ width: 260, border: 0, p: 2, backgroundColor: '#F6F6F6', height: 250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 70, height: 70, mx: 'auto',p:1 }} alt="Remy Sharp" src="https://i.ibb.co/vP8bFcn/cars.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    NEW VEHICLES
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Card sx={{ width: 260, border: 0, p: 2, backgroundColor: '#F6F6F6', height: 250 }}>
                                <CardActionArea>
                                    <Avatar sx={{width: 70, height: 70, mx: 'auto',p:1 }} alt="Remy Sharp" src="https://i.ibb.co/SyGCVM9/repair-tools.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    VEHICLE SERVICE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    About something that you know you need to be doing, but are not. Then with that thing
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Card sx={{ width: 260, border: 0, p: 2, backgroundColor: '#F6F6F6', alignItems: 'center', height: 250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 70, height: 70, mx: 'auto',p:1  }} alt="Remy Sharp" src="https://i.ibb.co/sJypS6P/spare-parts-1.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    VEHICLES PARTS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    You will begin to realise why this exercise is called the Dickens Pattern reference
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Card sx={{ width: 260, border: 0, p: 2, backgroundColor: '#F6F6F6', alignItems: 'center', height: 250 }}>
                                <CardActionArea>
                                    <Avatar sx={{ width: 70, height: 70, mx: 'auto',p:1 }} alt="Remy Sharp" src="https://i.ibb.co/nrfQJbm/vehicle.png" />
                                </CardActionArea>
                                <Typography sx={{ fontWeight: 500, m: 2, color: 'black', textAlign: 'center' }} variant="h5" component="div">
                                    OLD VEHICLES
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Scrooge some different futures as you notice that the idea of this exercise is hypnotize
                                </Typography>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ExtraParts;