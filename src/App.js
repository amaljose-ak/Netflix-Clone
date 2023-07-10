import React from 'react';
import './App.css';
import{orginals,action} from "./url"
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={orginals}  title='Netflix Orginal' />
    <RowPost url={action}  title='Action' isSmall  />
    <RowPost url={action}  title='Action' isSmall  />
    </div>
  );
}

export default App;
