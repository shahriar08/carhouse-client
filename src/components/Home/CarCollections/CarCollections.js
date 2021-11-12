import React, { useEffect, useState } from 'react';
import CarCollection from '../CarCollection/CarCollection';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';


const CarCollections = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-beyond-86436.herokuapp.com/car-collection')
            .then((res) => res.json())
            .then((data) => {
                const sliceData = data.slice(0, props.limit ?? 100);
                setProducts(sliceData);
            })
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <CarCollection
                            key={product.id}
                            product={product}
                        ></CarCollection>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default CarCollections;