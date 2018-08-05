import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hassError: false,
      errorMessage: ''
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  };

  render() {
    return (this.state.hasError) ?
        <h1>{this.state.errorMessage}</h1> :
          this.state.children
  }
}

export default ErrorBoundary;