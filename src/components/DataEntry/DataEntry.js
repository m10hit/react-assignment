import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI styling for Form */
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const DataEntry = ({ data, setStudent, history }) => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    gender: 'female',
    extra: {
      sports: false,
      dance: false,
      singing: false,
      debate: false,
    },
  });

  const classes = useStyles();

  /*  To handle form inputs */
  const handleInputChange = (event) => {
    event.persist();
    let field = event.target.name;
    let val = event.target.value ? event.target.value : event.target.checked;
    setInputs((inputs) => ({
      ...inputs,
      [field]: val,
    }));
  };

  /*  to handle form submissions */
  const submitHandler = (event) => {
    console.log('submitted');
    event.preventDefault();
    const inputData = [...data];
    inputData.push(inputs);
    setStudent(inputData);
    history.push('/viewedit');
  };

  return (
    <form className={classes.root} onSubmit={submitHandler}>
      <div>
        <TextField
          required
          id="standard-required"
          label="First Name"
          placeholder="First Name"
          name="firstName"
          value={inputs.firstName}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="standard-required"
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
          value={inputs.lastName}
          onChange={handleInputChange}
        />
        <TextField
          required
          id="standard-required"
          label="Student ID"
          placeholder="Student ID"
          name="studentId"
          type="number"
          value={inputs.studentId}
          onChange={handleInputChange}
        />
      </div>

      <FormControl className="Radios" component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={inputs.gender}
          onChange={handleInputChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Extra-Curricular Activities</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.extra.sports}
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      extra: {
                        ...prevState.extra,
                        sports: !prevState.extra.sports,
                      },
                    }))
                  }
                  name="sports"
                />
              }
              label="Sports"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.extra.dance}
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      extra: {
                        ...prevState.extra,
                        dance: !prevState.extra.dance,
                      },
                    }))
                  }
                  name="dance"
                />
              }
              label="Dance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.extra.singing}
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      extra: {
                        ...prevState.extra,
                        singing: !prevState.extra.singing,
                      },
                    }))
                  }
                  name="singing"
                />
              }
              label="Singing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inputs.extra.debate}
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      extra: {
                        ...prevState.extra,
                        debate: !prevState.extra.debate,
                      },
                    }))
                  }
                  name="debate"
                />
              }
              label="Debate"
            />
          </FormGroup>
        </FormControl>
      </div>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default DataEntry;
