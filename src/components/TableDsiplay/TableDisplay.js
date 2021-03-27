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

// Object.keys(row.extra).filter((each) => row.extra[each]) + ', ';

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
  const currentlyEditing = editIdx === index;
  // console.log(editIdx);

  return (
    <TableRow key={`tr-${index}`}>
      {header.map((head, ind) => {
        const checkHandler =
          head.prop === 'extra'
            ? Object.keys(row[head.prop]).filter((each) => row[head.prop][each])
            : '';
        console.log(checkHandler);
        return (
          <TableCell component="th" scope="row" key={`trc-${ind}`}>
            {head.prop === 'extra' && !currentlyEditing ? (
              Object.keys(row[head.prop]).filter(
                (each) => row[head.prop][each]
              ) + ', '
            ) : head.prop === 'extra' && currentlyEditing ? (
              <TextField
                value={checkHandler.map((each) => each)}
                onChange={(e) => changeHandler(e, head.prop, index)}
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
          {fields.map(
            (row, index) =>
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
            /* <TableRow key={row.firstName + index}>
              <TableCell component="th" scope="row">
                <TextField
                  required
                  disabled={disable}
                  id="standard-required"
                  name="studentId"
                  type="number"
                  value={row.studentId}
                  onChange={changeHandler}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  required
                  disabled={disable}
                  inputProps={{ style: { textAlign: 'right' } }}
                  id="standard-required"
                  name="firstName"
                  type="text"
                  value={row.firstName}
                  onChange={changeHandler}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  required
                  disabled
                  inputProps={{ style: { textAlign: 'right' } }}
                  id="standard-required"
                  name="firstName"
                  type="text"
                  value={row.lastName}
                  onChange={changeHandler}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  required
                  disabled={disable}
                  inputProps={{ style: { textAlign: 'right' } }}
                  id="standard-required"
                  name="gender"
                  type="text"
                  value={row.gender}
                  onChange={changeHandler}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  disabled={disable}
                  inputProps={{ style: { textAlign: 'right' } }}
                  id="standard-required"
                  name="extra"
                  type="text"
                  value={
                    Object.keys(row.extra).filter((each) => row.extra[each]) +
                    ', '
                  }
                  onChange={changeHandler}
                />
              </TableCell>

              <TableCell align="right">
                <DeleteIcon onClick={() => deleteClick(index)} />
              </TableCell>
              <TableCell align="right">
                <EditIcon onClick={() => editClick(index)} />
              </TableCell>
            </TableRow> */
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
