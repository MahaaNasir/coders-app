import React from 'react';
import Orrery from './Orrery';
const express = require('express');
const app = express();

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.listen(3000, () => console.log('Server running on port 3000'));

const App = () => {
  return (
    <div>
      <></>
      <Orrery />
    </div>
  );
};

export default App;
