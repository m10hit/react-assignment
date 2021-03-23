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

  /* Handler to remove data */
  const deleteHandler = (index) => {
    const students = [...student];
    students.splice(index, 1);
    console.log(students);
    setStudent(students);
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
              <DataViewEdit {...props} data={student} deleted={deleteHandler} />
            )}
          />
          <Redirect from="/" to="/add" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
