import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Components/navbar';
import TodoPage from './Pages/ToDo';

const Pages: {name: string, href: string}[]  = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'ToDo List',
    href: '/todo'
  }
]

const App:FC = () => {

  return (
    <Router>

      <Wrapper>
        <Navbar pages={Pages}/>

        <Switch>
          <Route exact path='/todo' component={TodoPage}/>
        </Switch>
      </Wrapper>

    </Router>
  );
}

//STYLED COMPONENTS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default App;

