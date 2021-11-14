import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box, Button, Container } from '@mui/material';
import './AddReviews.css'
const AddReviews = () => {
    

    const {handleSubmit } = useForm();
    const [name, setName] = useState('');
    const [imageURL, setIMageURL] = useState(null);
    const [details, setDetails] = useState('');
    const [rating, setRating] = useState(0);

    const onSubmit = () => {

        const productData = {
            name: name,
            rating :rating,
            image: imageURL,
            details:details,
        };


        fetch('https://powerful-beyond-86436.herokuapp.com/addRatings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert('Review Added');
            })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '750bacc17dfece9d99a0de0b0b7b1d63');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <Container style={{p:4}}>
            <form className="form-group row container mx-auto p-5 m-5" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-danger m-3 mx-auto'>Add Review</h1>
                
                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName1">Your Name:</label>
                    <input onChange={event => setName(event.target.value)} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName1" placeholder="Your Name"></input>
                </Box>

                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Rating in Number(1 to 5):</label>
                    <input onChange={event => setRating(parseInt(event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="model" id="inlineFormInputName2" placeholder="Add Rating"></input>
                </Box>
                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Review In Details:</label>
                    <input onChange={event => setDetails((event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="details" id="inlineFormInputName2" placeholder="Add review in Details"></input>
                </Box>

                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName4"><small className='text-danger fw-bold'>Image Give Some Time To Upload Then Press Add Event</small></label>
                    <input type="file" className="form-control mb-2 mr-sm-2" id="inlineFormInputName4" onChange={handleImageUpload}></input>
                </Box>

                <Box className="col-auto text-center">
                    <Button style={{ backgroundColor: '#17B978', color: '#fff'}} type="submit" className="btn btn-danger mt-3 mb-2">Add Review</Button>
                </Box>
            </form>
        </Container>
    );
};

export default AddReviews;