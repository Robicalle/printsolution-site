"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
    // Sentry will auto-capture if configured
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[40vh] flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-2xl font-bold text-gray-800 mb-2">
                Qualcosa è andato storto
              </p>
              <p className="text-gray-500 mb-6">
                Si è verificato un errore. Prova a ricaricare la pagina.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-400 transition-colors"
              >
                Riprova
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
