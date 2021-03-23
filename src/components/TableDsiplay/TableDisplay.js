import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

export default function BasicTable({ fields, deleteClick }) {
  const classes = useStyles();
  console.log(fields);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Extra-Curricular</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* mapping the submitted form data in the table */}
          {fields.map((row, index) => (
            <TableRow key={row.firstName + index}>
              <TableCell component="th" scope="row">
                {row.studentId}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">
                {Object.keys(row.extra).filter((each) => row.extra[each]) +
                  ', '}
              </TableCell>

              <TableCell align="right">
                <DeleteIcon onClick={() => deleteClick(index)} />
              </TableCell>
              <TableCell align="right">
                <EditIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
