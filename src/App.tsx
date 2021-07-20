import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Components/navbar';
import TodoPage from './Pages/ToDo';
import Quiz from './Pages/Quiz';

const Pages: {name: string, href: string}[]  = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'ToDo List',
    href: '/todo'
  },
  {
    name: 'Quiz',
    href: '/quiz'
  },
]

const App:FC = () => {

  return (
    <Router>

      <Wrapper>
        <Navbar pages={Pages}/>

        <Switch>
          <Route exact path='/todo' component={TodoPage}/>
          <Route exact path='/quiz' component={Quiz}/>
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

