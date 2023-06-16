import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { getVehicles, removeVehicles } from '../api/vehicle';
import { Link } from 'react-router-dom';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function VehicleTable() {
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    loadVehicles()
  }, [])
  const loadVehicles = async () => {
    try {
      const response = await getVehicles()
      setVehicles(response)

    }
    catch (error) {
      console.log("unexpected error occured", error)
    }
  }

  const remove = async (id) => {
    try {
      console.log(id)
      await removeVehicles({
        id: id
      })
      loadVehicles()
    }
    catch (exception) {
      console.log("failed", exception)
    }

  }

  return (
    <div>
      <TableContainer component={Paper}>
      <Div>{"Registered Vehicles"}</Div>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Model Name</TableCell>
              <TableCell align="left">Registration&nbsp;</TableCell>
              <TableCell align="left">Category&nbsp;</TableCell>
              <TableCell align="left">Remove&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow
                key={vehicle.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {vehicle.id}
                </TableCell>
                <TableCell align="left">{vehicle.modelName}</TableCell>
                <TableCell align="left">{vehicle.registrationNumber}</TableCell>
                <TableCell align="center">{vehicle.type}</TableCell>
                <TableCell align="left"><button onClick={() => remove(vehicle.id)}>delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <button><Link to='/Vehiclemngmnt/addveh'>add</Link></button>
    </div>
  );
}