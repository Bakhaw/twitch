import React, { Component } from 'react';
import SnackBar from './SnackBar';

class UpdateApp extends Component {
  state = {
    hasUpdate: undefined
  };

  componentDidMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }

  render() {
    const { hasUpdate } = this.state;
    return (
      <div>
        {hasUpdate !== undefined &&
          (hasUpdate ? (
            <SnackBar message='A new update is available, please quit and restart the application' />
          ) : (
            <SnackBar message='The application is now cached and ready to use offline' />
          ))}
      </div>
    );
  }
}

export default UpdateApp;
