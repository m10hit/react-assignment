import React, { useState } from 'react';
import DataEntry from './components/DataEntry/DataEntry';
import DataViewEdit from './components/DataViewEdit/DataViewEdit';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import './App.css';

function App() {
  const [student, setStudent] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);

  /* Handler to remove data */
  const deleteHandler = (index) => {
    const students = [...student];
    students.splice(index, 1);
    console.log(students);
    setStudent(students);
  };

  const editHandler = (index) => {
    setEditIdx(index);
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };

  const changeHandler = (e, name, index) => {
    console.log(name);
    const { value } = e.target;
    const changed =
      name === 'extra'
        ? student.map((row, i) =>
            i === index ? { ...row, ['editing']: value } : row
          )
        : student.map((row, i) =>
            i === index ? { ...row, [name]: value } : row
          );
    console.log('<><>', changed);
    setStudent(changed);
  };
  console.log('----------->>>', student);
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to Student Portal</h1>
        <h3>Add, Edit and Manage your Student Database</h3>
        <nav>
          <ul>
            <li>
              <NavLink to="/add/" exact>
                Add Student Data
              </NavLink>
            </li>
            <li>
              <NavLink to="/viewedit/" exact>
                Edit Existing Student Data
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/add"
            render={(props) => (
              <DataEntry {...props} setStudent={setStudent} data={student} />
            )}
          />
          <Route
            path="/viewedit"
            render={(props) => (
              <DataViewEdit
                {...props}
                data={student}
                deleted={deleteHandler}
                edited={editHandler}
                stopEditing={stopEditing}
                changeHandler={changeHandler}
                editIdx={editIdx}
              />
            )}
          />
          <Redirect from="/" to="/add" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
