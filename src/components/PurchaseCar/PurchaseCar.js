import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import {Button, Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory, useParams } from 'react-router';
import ConfirmModal from '../ConfirmModal/ConfirmModal';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const PurchaseCar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { carId } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch('https://powerful-beyond-86436.herokuapp.com/car-collection')
            .then((res) => res.json())
            .then((data) => {
                const productById = data.filter((product) => product.id === Number(carId));
                setProduct(productById.length ? productById[0] : {});
            });
    }, []);

    return (
        <>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Card sx={{ minWidth: 250, border: 0, boxShadow: 0 }}>

                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="div">
                                    Car Name: {product.carName}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body1" color="text.secondary">
                                    Car Price: {product.price}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="text.secondary">
                                    Car Mode: {product.model}
                                </Typography><br />
                                <Typography variant="body2" color="text.secondary">
                                    <span style={{ fontWeight: 'bold' }}>Car Details: </span> {product.carDetails}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter} >
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '300px', margin: '0 auto' }}
                            image={product.image}
                            alt="green iguana"
                        />

                    </Grid>
                </Grid>
                <Typography>
                    <Button style={{ backgroundColor: '#17B978', color: '#fff'}} onClick={handleOpen} variant="contained">Confirm Order</Button>
                </Typography>

            </Container>
            <ConfirmModal
                product={product}
                open={open}
                handleClose={handleClose}>

            </ConfirmModal>
        </>
    );
};

export default PurchaseCar;