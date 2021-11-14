import * as React from 'react';
import { Grid } from '@mui/material';
import Order from '../Order/Order';
import ManageOrder from '../ManageOrder/ManageOrder';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {admin} = useAuth();
    return (
        <Grid container spacing={4}>
        <Grid item xs={12} >
            {!admin && <Order/>}
            {admin && <ManageOrder/>}
        </Grid>
    </Grid>
    );
};

export default DashboardHome;