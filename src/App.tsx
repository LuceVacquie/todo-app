import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import { Page } from './Interface';

const Pages: {name: string, href: string}[]  = [
  {
      name: 'ToDo List',
      href: '../Pages/ToDo'
  }
]

const App = (props: {pages: Array<Page>}) => {

  return (
    <div className="App">
      <Navbar pages={Pages}/>
    </div>
  );
}

export default App;
