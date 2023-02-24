// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>Nome: { user.name } </p>
        <p>Email: { user.email } </p>
        <p>Id: { user.id } </p>
        <p>Foto:</p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;