import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ManageProducts = () => {
    const [product,setProduct] = useState([]);
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('https://powerful-beyond-86436.herokuapp.com/car-collection')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },)

    const handleDeleteCar = id => {
      const url = `https://powerful-beyond-86436.herokuapp.com/car-collection/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          alert('Car Item Deleted')
          const remaining = services.filter(service => service._id !== id);
          setServices(remaining);
        }

      })
    }
    return (
        <div>
            <h4>Total Product : {product.length}</h4>
            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Car Name</StyledTableCell>
            <StyledTableCell align="right">Car Model</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Car Details</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.carName}
              </StyledTableCell>

              <StyledTableCell align="right">{row.model}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.carDetails}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() => handleDeleteCar(row._id)} style={{ backgroundColor: '#17B978',color:'#fff' }} variant="contained">Delete</Button></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProducts; 