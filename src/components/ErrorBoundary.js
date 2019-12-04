import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something Went Wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
