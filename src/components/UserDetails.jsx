import React from 'react';
import { string } from 'prop-types';

import useGithub from '../hooks/useGithub';

const UserDetails = ({ username }) => {
  const { user, error, isLoading } = useGithub(username);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  if (error) {
    return (
      <h1 style={{ color: 'red' }}>Something wrong</h1>
    );
  }

  return (
    <div>
      {
        user && user.name
          ? (
            <div>
              <h1>User details:</h1>
              <p>{`Fullname: ${user.name}`}</p>
              <img src={user.avatar_url} alt="avatar" />
            </div>
          )
          : null
      }
    </div>
  );
};

UserDetails.defaultProps = {
  username: null,
};

UserDetails.propTypes = {
  username: string,
};

export default UserDetails;
