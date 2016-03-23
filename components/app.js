import React from 'react'

const App = React.createClass({

  render() {
    return (
      <div className="app">
        <h1>Hello</h1>
        {this.props.children}
      </div>
    )
  }

})

export default App
