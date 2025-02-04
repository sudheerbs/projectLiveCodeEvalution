import React from 'react';

const DisplayData = React.memo(({ data, deleteData }) => {
  return (
    <div >
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <button onClick={() => deleteData(data.id)}>Delete</button>
    </div>
  );
});

export default DisplayData;
