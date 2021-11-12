import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CarCollection = (props) => {
    const { id,carName, image,price,model } = props.product;
    const history = useHistory();
    
    const handleDoctorClick = () => {
        history.push(`/product/${id}`);
    };
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {carName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {model}
                    </Typography>
                    <Typography>
                    <Button onClick={handleDoctorClick} variant="contained">Buy Now</Button>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CarCollection;