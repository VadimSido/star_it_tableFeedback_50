import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import TableFeedback from './components/TableFeedback';


function App() {
  return (
    <Router>
      <Header />
      <Route>
        <TableFeedback />
      </Route>
    </Router>
  );
}

export default App;
