import React from 'react'

const Root = React.createClass ({

  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

})

export default Root
