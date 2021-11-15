import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CarCollection = (props) => {
    const { _id,carName, image,price,model } = props.product;
    const history = useHistory();
    
    const handlePurchaseClick = () => {
        history.push(`/product/${_id}`);
    };
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3  }}>
                <CardMedia
                    component="img"
                    style={{ width: '1', height: '160px', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold'}} variant="h5" component="div">
                        {carName}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold'}} variant="body2" color="black">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2" color="black">
                        Car model: {model}
                    </Typography>
                    <Typography>
                    <Button sx={{ mt: 1 }} onClick={handlePurchaseClick} style={{ backgroundColor: '#17B978', color: '#fff'}} variant="contained">Buy Now</Button>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CarCollection;