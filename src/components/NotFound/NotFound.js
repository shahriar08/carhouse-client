import { Box, Grid } from '@mui/material';
import React from 'react';
import img from './notFound.jpg'
const NotFound = () => {
    return (
        <Box sx={{m:4}}>
            <Grid sx={{ justifyContent: 'center' }} item xs={12} >
                <img style={{width: "40rem"}} src={img} alt="" />
            </Grid>
        </Box>
    );
};

export default NotFound;