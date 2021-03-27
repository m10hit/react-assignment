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
import TextField from '@material-ui/core/TextField';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';

const useStyles = makeStyles({
  table: {
    minWidth: 1500,
  },
});

// To handle the rows
const rowHandler = (
  row,
  index,
  header,
  deleteClick,
  editClick,
  editIdx,
  changeHandler,
  stopEditing
) => {
  //To check if we are currently editing
  const currentlyEditing = editIdx === index;

  return (
    <TableRow key={`tr-${index}`}>
      {header.map((head, ind) => {
        const checkHandler =
          head.prop === 'extra'
            ? Object.keys(row[head.prop]).filter((each) => row[head.prop][each])
            : '';
        return (
          <TableCell component="th" scope="row" key={`trc-${ind}`}>
            {head.prop === 'extra' && !currentlyEditing ? (
              Object.keys(row[head.prop]).filter(
                (each) => row[head.prop][each]
              ) + ', '
            ) : head.prop === 'extra' && currentlyEditing ? (
              <TextField
                value={checkHandler.map((each) => each)}
                onChange={(e) => changeHandler(e, 'editing', index)}
              />
            ) : currentlyEditing ? (
              <TextField
                name={head.prop}
                value={row[head.prop]}
                onChange={(e) => changeHandler(e, head.prop, index)}
              />
            ) : (
              row[head.prop]
            )}
          </TableCell>
        );
      })}
      <TableCell align="right">
        <DeleteIcon onClick={() => deleteClick(index)} />
      </TableCell>
      <TableCell align="right">
        {currentlyEditing ? (
          <SaveSharpIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => editClick(index)} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default function BasicTable({
  fields,
  deleteClick,
  editClick,
  editIdx,
  stopEditing,
  changeHandler,
  header,
}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableCell key={`thc-${index}`}>{head.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* mapping the submitted form data in the table */}
          {fields.map((row, index) =>
            rowHandler(
              row,
              index,
              header,
              deleteClick,
              editClick,
              editIdx,
              changeHandler,
              stopEditing
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
