import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { getFeedetails } from '../api/users';
import { verifyPackage } from '../api/package';

export default function Feedetails() {
  // const [id, setId] = useState("");
  const [fees, setFee] = useState([])
  useEffect(() => {
    loadfee()
  }, [])
  const loadfee = async () => {

    try {
      const response = await getFeedetails()
      setFee(response)
      console.log(response)
    }
    catch (error) {
      console.log("unexpected error occured", error)
    }
  }

  const verify = async (id) => {

    try {
      console.log(id)
      await verifyPackage({
        id: id
      })
      loadfee()
    }
    catch (exception) {
      console.log("failed", exception)
    }

  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Trainee Id</TableCell>
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
                {fee.traineeId}
              </TableCell>
              <TableCell align="right">{fee.firstName}</TableCell>
              <TableCell align="right">{fee.lastName}</TableCell>
              <TableCell align="right">{fee.transactionId}</TableCell>
              <TableCell align="right">{fee.vehicleType}</TableCell>
              <TableCell align="right"><button onClick={() => verify(fee.id)}>verify</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}