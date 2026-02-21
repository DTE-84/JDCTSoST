import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    console.log("Starting React mount...");
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React render call complete");
  } catch (error) {
    console.error("Mounting Error:", error);
    // Display error directly on the screen for mobile debugging
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '20px';
    errorDiv.style.background = 'white';
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '0';
    errorDiv.style.zIndex = '9999';
    errorDiv.innerHTML = `<h3>React Error:</h3><p>${error instanceof Error ? error.message : String(error)}</p>`;
    document.body.appendChild(errorDiv);
  }
} else {
  console.error("Root element not found!");
}
