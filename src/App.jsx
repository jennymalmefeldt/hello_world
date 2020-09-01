import React, { Component } from 'react'

class App extends Component {
  state = {
    greeting: 'Hello',
    recevier: 'World'
  };
  onChangeGreeting = () => {
    this.setState({
      greeting: 'God morning'
    })
  }

  onChangeReceiver = () => {
    this.setState({
      recevier: 'Stockholm'
    })
  }

  render() {
    return (
      <div>
        {this.state.greeting} {this.state.recevier}
        <button onClick={this.onChangeGreeting}>Click me</button>
        <button onClick={this.onChangeReceiver}>Click me also</button>
      </div>
    )
  }
}

export default App
