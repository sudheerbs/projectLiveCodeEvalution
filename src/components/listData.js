import React, { useContext } from 'react';
import { DataContext } from './datacontext'; 
import DisplayData from './displaydata';

const ListData = () => {
  const { data, deletePost } = useContext(DataContext);
 console.log('data', data);
  return (
    <div>
      {data.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        data.map((post) => (
          <DisplayData key={post.id} post={post} deletePost={deletePost} />
        ))
      )}
    </div>
  );
};

export default ListData;

