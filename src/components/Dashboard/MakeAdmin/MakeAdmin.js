import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://powerful-beyond-86436.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('');
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="outlined-basic" label="Email" type="email" onBlur={handleOnBlur} variant="outlined" />
                <Button type="submit" variant="contained">Add Admin</Button>
            </form>
            {success &&  <Alert severity="success">Admin Added Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;