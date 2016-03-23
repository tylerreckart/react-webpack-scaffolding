import React from 'react';

const Root = React.createClass ({

  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
      </div>
    );
  }

})

export default Root;
