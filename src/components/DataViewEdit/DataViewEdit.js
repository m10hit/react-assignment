import React from 'react';
import TableDisplay from '../TableDsiplay/TableDisplay';

const DataViewEdit = ({ data, deleted }) => {
  console.log(data);
  return (
    <div>
      <h2>Student Data</h2>
      <TableDisplay fields={data} deleteClick={deleted} />
    </div>
  );
};

export default DataViewEdit;
