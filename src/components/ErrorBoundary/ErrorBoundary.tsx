import React, { Component, ReactNode} from "react"

interface ErrorBoundaryProps {
    children: ReactNode;
  }
  
  interface ErrorBoundaryState {
    hasError: boolean;
  }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
      super(props)
   
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
        console.log("UN ERROR _> ", error);
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      console.log({ error, errorInfo })
    }
    render() {
        console.log("UN ERROR 2222 ", this.state);
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        )
      }
   
      // Return children components in case of no error
   
      return this.props.children;
    }
  }
   
  export default ErrorBoundary