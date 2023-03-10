import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {

    return (
        <div>
            <NavBar/>
            <ItemListContainer></ItemListContainer>
        </div>
    );
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/