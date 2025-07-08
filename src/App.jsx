// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import your router configuration

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;