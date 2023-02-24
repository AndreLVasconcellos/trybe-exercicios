import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img className='card' src={ source } alt={ alternativeText } />;
  }
}

export default Image;