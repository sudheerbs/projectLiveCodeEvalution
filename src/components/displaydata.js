import React from 'react';

const DisplayData = React.memo(({ post, deletePost }) => {
  return (
    <div >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
});

export default DisplayData;
