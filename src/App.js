import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost  title='Netflix Orginal' />
    <RowPost  title='Action' isSmall  />
    </div>
  );
}

export default App;
