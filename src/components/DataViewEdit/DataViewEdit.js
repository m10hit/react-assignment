import React from 'react';
import TableDisplay from '../TableDsiplay/TableDisplay';

const DataViewEdit = ({
  data,
  deleted,
  edited,
  disable,
  stopEditing,
  editIdx,
  changeHandler,
}) => {
  return (
    <div>
      <h2>Student Data</h2>
      <TableDisplay
        fields={data}
        deleteClick={deleted}
        editClick={edited}
        stopEditing={stopEditing}
        editIdx={editIdx}
        changeHandler={changeHandler}
        header={[
          {
            name: 'Student ID',
            prop: 'studentId',
          },
          {
            name: 'First name',
            prop: 'firstName',
          },
          {
            name: 'Last name',
            prop: 'lastName',
          },
          {
            name: 'Gender',
            prop: 'gender',
          },
          {
            name: 'Extra-Curricular',
            prop: 'extra',
          },
        ]}
      />
    </div>
  );
};

export default DataViewEdit;
