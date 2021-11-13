import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmModal = ({ open, handleClose, product}) => {
    const { carName,price } = product;
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email,mobile:''}
    const [orderInfo,setOrderInfo] = useState(initialInfo);

    const handleConfirmSubmit = e => {
        const confirmOrder = {
            ...orderInfo,
            carName: carName,
            carPrice: price
        }

        fetch('https://powerful-beyond-86436.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(confirmOrder)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertedId){
                handleClose();
            }
        })

        console.log(confirmOrder)
        alert('submititing');
        console.log('submit click')
        handleClose();
        e.preventDefault();
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        console.log(newInfo)
        setOrderInfo(newInfo);
    }

    

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Purchase
                    </Typography>
                    <form onSubmit={handleConfirmSubmit}>
                        <TextField
                            disabled
                            id="outlined-required"
                            label="Car Name & Model"
                            name="carName"
                            defaultValue={product.carName + ' ' + 'Model: ' + product.model}
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            disabled
                            id="outlined-price"
                            label="Car Price"
                            name='carPrice'
                            defaultValue={product.price + ' TK'}
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Owner Name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            name='name'
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Email"
                            name='email'
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            sx={{ width: '90%', m: 1 }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Mobile No"
                            name='mobile'
                            onBlur={handleOnBlur}
                            sx={{ width: '90%', m: 1 }}
                        />

                        <Typography>
                            <Button type="submit" variant="contained">Confirm</Button>
                        </Typography>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ConfirmModal;