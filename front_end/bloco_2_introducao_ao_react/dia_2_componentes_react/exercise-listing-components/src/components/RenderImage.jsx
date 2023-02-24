import React from 'react';
import UserProfile from './UserProfile';

class RenderImage extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <>
       {users.map((user) => <UserProfile key={ user.id } user={ user } />)}
      </>
    );
  }
}

export default RenderImage;

