import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddCar.css'
import { Box, Button, Container } from '@mui/material';
const AddCar = () => {
    

    const { handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [name, setCarName] = useState('');
    const [details, setDetails] = useState('');
    const [price, setEventPrice] = useState(0);
    const [model, setModel] = useState(0)
    const onSubmit = () => {

        const productData = {
            carName: name,
            price: price,
            model: model,
            image: imageURL,
            carDetails:details,
        };
        const url = `https://powerful-beyond-86436.herokuapp.com/addCar`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
            .then(data => {
                alert('Product Added');
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

            <form  onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-danger m-3 mx-auto'>Add Car</h1>
                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName1">Car Name:</label>
                    <input onChange={event => setCarName(event.target.value)} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName1" placeholder="Car Name"></input>
                </Box>

                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Car Price:</label>
                    <input onChange={event => setEventPrice(parseInt(event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="price" id="inlineFormInputName2" placeholder="Car Price"></input>
                </Box>
                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Car Model:</label>
                    <input onChange={event => setModel(parseInt(event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="model" id="inlineFormInputName2" placeholder="Car Model"></input>
                </Box>
                <Box sx={{m:2}} className="col-6">
                    <label className="my-1 mr-2 text-dark" for="inlineFormInputName2">Car Details</label>
                    <input onChange={event => setDetails((event.target.value))} type="text" className="form-control mb-2 mr-sm-2" name="details" id="inlineFormInputName1" placeholder="Car Details"></input>
                </Box>
                <Box sx={{m:2}} className="col-6">
                    <label style={{color:'red'}} className="my-1 mr-2" for="inlineFormInputName4"><small className='text-danger fw-bold'>Image take Some Time To Upload Then Press Add Review</small></label><br />
                    <input type="file" className="form-control mb-2 mr-sm-2" id="inlineFormInputName4" onChange={handleImageUpload}></input>
                </Box>
                <div sx={{m:2}} className="col-auto text-center">
                    <Button style={{ backgroundColor: '#17B978', color: '#fff'}} type="submit" className="btn btn-danger mt-3 mb-2">Add Review</Button>
                </div>
            </form>
        </Container>
    );
};

export default AddCar;