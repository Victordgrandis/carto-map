import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapComponent } from './components/map';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <MapComponent />
    </div>
  );
}

export default App;
