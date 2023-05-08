import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    id:number,
    ModelName: String,
    Registration:String,
    Category:String,
    Active:number,
  
) {
  return { id,ModelName,Registration,Category,Active };
}

const rows = [
  createData(1,'Alto','KL01AR2002','4wheeler',1),
  createData(2,'WagonR','KL05AA1234','4wheeler',0),
  createData(3,'Swift','KL11AE2000','4wheeler',1),
  createData(4,'Activa','KL05T1249','2wheeler',1),
  createData(5,'Unicorn','KL07R4530','2wheeler',0),
  createData(6,'800','KL08AR6788','4wheeler',1),
  createData(7,'Eon','KL17M7356','4wheeler',1),
  createData(8,'Hero','KL09K8907','2wheeler',1),
  createData(9,'Royal Enfield','KL08W1234','2wheeler',1),
  createData(10,'Vespa','KL05H6765','2wheeler',1),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Model Name</TableCell>
            <TableCell align="right">Registration&nbsp;</TableCell>
            <TableCell align="right">Category&nbsp;</TableCell>
            <TableCell align="right">Active&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.ModelName}</TableCell>
              <TableCell align="right">{row.Registration}</TableCell>
              <TableCell align="right">{row.Category}</TableCell>
              <TableCell align="right">{row.Active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}