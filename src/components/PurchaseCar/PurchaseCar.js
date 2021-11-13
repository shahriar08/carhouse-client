import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container} from '@mui/material';
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
                                <Typography variant="h2" component="div">
                                    {product.carName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.model}
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
                        {/*<Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                         <form onSubmit={handleConfirm}> 
                            <TextField
                                id="outlined-required"
                                label="Name"
                                defaultValue={product.carName}
                                sx={{width:'90%',m:1}}
                            />
                            <TextField

                                id="outlined-disabled"
                                label="Email"
                                sx={{width:'90%',m:1}}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Mobile No"
                                sx={{width:'90%',m:1}}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Address"
                                sx={{width:'90%',m:1}}
                            />
                            <TextField
                                id="outlined-number"
                                label="NID Number"
                                sx={{width:'90%',m:1}}

                            />

                            <Typography>
                                <Button onSubmit={handleConfirm} variant="contained">Confirm</Button>
                            </Typography>

                        </form> 
                    </Box>*/}

                    </Grid>

                </Grid>
                <Typography>
                    <Button onClick={handleOpen} variant="contained">Confirm Order</Button>
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