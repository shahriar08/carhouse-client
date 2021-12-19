import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import './Spinner.css'

const Spinner = () => {
    return (
        <Box className='spinner' sx={{ display: 'flex' ,justifyContent: 'center'}}>
        <CircularProgress color="success"/>
      </Box>
    );
};

export default Spinner;