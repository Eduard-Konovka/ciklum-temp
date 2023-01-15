import React from "react";
import "./styles.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error("Information about this error: ", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Виникла помилка</div>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export default ErrorBoundary;
