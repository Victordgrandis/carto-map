import React, { useState } from 'react';
import './App.css';
import { MapComponent } from './components/modules/home/map';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import { Header } from './components/elements/header';
import { MapSidebar } from './components/modules/home/map-sidebar';

function App() {
  return (
    <div className="App">
      <Box>
        <Header />
        <Box
          sx={{
            height: 'calc(100vh - 140px)',
            position: 'relative',
            display: 'flex',
            paddingTop: '2px',
          }}
        >
          <Box sx={{ width: '400px', boxShadow: 1 }}>
            <MapSidebar />
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: 'calc(100vw - 400px)',
            }}
          >
            <MapComponent />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
