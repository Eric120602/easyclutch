import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import { getStudentexs } from '../api/users';






export default function StdexsTable() {
  const [students, setStudents]=useState([])
  useEffect(()=>{
    loadstudents()
  },[])
  const loadstudents=async()=>{
   console.log("Ethi")
    try{
      const response=await getStudentexs()
      setStudents(response)

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
            <TableCell align="right">Package&nbsp;</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="right">{student.first_name}</TableCell>
              <TableCell align="right">{student.last_name}</TableCell>
              <TableCell align="right">{student.package}</TableCell>
              
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}