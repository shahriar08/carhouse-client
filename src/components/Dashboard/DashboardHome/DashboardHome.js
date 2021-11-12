import * as React from 'react';
import { Grid } from '@mui/material';
import Order from '../Order/Order';

const DashboardHome = () => {
    return (
        <Grid container spacing={4}>
        <Grid item xs={12} >
            <Order/>
        </Grid>
    </Grid>
    );
};

export default DashboardHome;