import React from 'react';
import UserContainer from './container/UserContainer'
import Jumbotron from './components/Jumbotron/Jumbotron';
import Wrapper from './components/Wrapper';
import SearchBar from './components/Searchbar/SearchBar';


function App() {
  return (
        <div>
          <Jumbotron />
          <SearchBar />
          <br />
          <Wrapper>
          <UserContainer />
          </Wrapper>
        </div>
  );
}

export default App;
