import React, { useContext } from 'react';
import { DataContext } from './datacontext'; 
import DisplayData from './displaydata';

const ListData = () => {
  const { data, deleteData } = useContext(DataContext);
 console.log('data', data);
  return (
    <div>
      {data.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        data.map((keyData) => (
          <DisplayData key={keyData.id} data={keyData} deleteData={deleteData} />
        ))
      )}
    </div>
  );
};

export default ListData;

