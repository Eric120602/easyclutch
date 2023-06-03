import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import { getFeedetails} from '../api/users';

export default function Feedetails() {
  const [fees,setFee ]=useState([])
  useEffect(()=>{
    loadfee()
  },[])
  const loadfee=async()=>{
   console.log("Ethi")
    try{
      const response=await getFeedetails()
      setFee(response)

    }
    catch(error){
      console.log("unexpected error occured" ,error)
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name&nbsp;</TableCell>
            <TableCell align="right">Transaction id&nbsp;</TableCell>
            <TableCell align="right">Vehicle type&nbsp;</TableCell>
            <TableCell align="right">Verify&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fees.map((fee) => (
            <TableRow
              key={fee.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {fee.trainee_id}
              </TableCell>
              <TableCell align="right">{fee.first_name}</TableCell>
              <TableCell align="right">{fee.last_name}</TableCell>
              <TableCell align="right">{fee.transaction_id}</TableCell>
              <TableCell align="right">{fee.type}</TableCell>
              <TableCell align="right"><button>verify</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}