import React from 'react';
import TemperatureConverter from './TemperatureConverter'; // Import the TemperatureConverter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application</h1>
        <TemperatureConverter /> {/* Render the TemperatureConverter component */}
      </header>
    </div>
  );
}

export default App;