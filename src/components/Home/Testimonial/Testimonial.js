import { Avatar, Box, Card, CardContent, Container, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://powerful-beyond-86436.herokuapp.com/ratings')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
    }, [])

    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 600, p: 2, mt: 5, textAlign: 'center', backgroundColor: '#17B978', color: '#fff' ,borderRadius: 16 }} variant="h4" component="div">
                    Our Customer Review
                </Typography>
                <Carousel breakPoints={breakPoints}>
                    {
                        reviews.map(review =>
                            <Container style={{ margin: '10%' }}>
                                <Card style={{ width: 'auto', height: '230px', margin: '5%', background: '#fff' }} sx={{ minWidth: 275 }}>
                                    <CardContent style={{ color: '#252C14' }}>
                                        <Avatar sx={{ width: 56, height: 56, mx: 'auto' }} alt="image" src={review.image} />
                                        <Typography sx={{ fontSize: '25' }} style={{ color: '#F73859' }} gutterBottom>{review.name}</Typography>
                                        <Rating
                                            initialRating={review.rating}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <Typography variant="body2">
                                            {review.details}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Container>
                        )
                    }
                </Carousel>
            </Container>
        </Box>
    )
};
export default Testimonial;