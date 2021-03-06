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

  // Handler to remove data
  const deleteHandler = (index) => {
    const students = [...student];
    students.splice(index, 1);
    setStudent(students);
  };

  // Handler to set the index to perform data in a particular row
  const editHandler = (index) => {
    setEditIdx(index);
  };

  // To stop editing when clicking on save
  const stopEditing = () => {
    setEditIdx(-1);
  };

  // Handler to edit data
  const changeHandler = (e, name, index) => {
    const { value } = e.target;
    const changed = student.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setStudent(changed);
  };
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
