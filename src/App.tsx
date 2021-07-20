import React, {FC} from 'react';
import './App.css';
import Navbar from './Components/navbar';
import { Page } from './Interface';

const Pages: {name: string, href: string}[]  = [
  {
      name: 'ToDo List',
      href: '../Pages/ToDo'
  }
]

interface Props {
  pages: Array<Page>;
}

const App:FC<Props> = ({pages}) => {

  return (
    <div className="App">
      <Navbar pages={Pages}/>
    </div>
  );
}

export default App;
