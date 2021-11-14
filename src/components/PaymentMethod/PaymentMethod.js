import { Container, Grid } from '@mui/material';
import React from 'react';
import available from './26052460.jpg'


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const PaymentMethod = () => {

    return (
        <Container>
            <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{ width: '100%' }} src={available} alt="" />
            </Grid>
        </Container>
    );
};

export default PaymentMethod;