import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { getVehicles, removeVehicles } from '../api/vehicle';
import { Link } from 'react-router-dom';

export default function VehicleTable() {
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    loadVehicles()
  }, [])
  const loadVehicles = async () => {
    console.log("Ethi")
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
    }
    catch (exception) {
      console.log("failed", exception)
    }

  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Model Name</TableCell>
              <TableCell align="right">Registration&nbsp;</TableCell>
              <TableCell align="right">Category&nbsp;</TableCell>
              <TableCell align="right">Remove&nbsp;</TableCell>
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
                <TableCell align="right">{vehicle.model_name}</TableCell>
                <TableCell align="right">{vehicle.registration_number}</TableCell>
                <TableCell align="right">{vehicle.type}</TableCell>
                <TableCell align="right"><button onClick={() => remove(vehicle.id)}>delete</button></TableCell>
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