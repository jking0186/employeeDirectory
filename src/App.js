import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Employee from './components/Employee/Employee';
import Wrapper from './components/Wrapper';
import SearchBar from './components/Searchbar/SearchBar';


function App() {
  return (
    <Router>
        <div>
          <Jumbotron />
          <SearchBar />
          <br />
          <Wrapper>
          <Route exact path="/" component={Employee} />
          </Wrapper>
        </div>
    </Router>
  );
}

export default App;
