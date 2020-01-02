import React from 'react';

import getPosts from './api';

const posts = getPosts();

const List = ({ fetchType }) => {
  const data = posts.get(fetchType);
  return (
    <div>
      {
        data.map(
          (item, index) => <div key={index.toString()} role="grid">{item.title}</div>
        )
      }
    </div>
  );
};

export default List;
