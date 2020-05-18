import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Shelf from './views/Shelf'
import Home from './views/Home'
import ItemDetail from './views/ItemDetail'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import styled from "@emotion/styled";


const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  min-height: 100vh;
  color: ${props => props.theme.body};
  body{
      color: ${props => props.theme.body};
      background: ${props => props.theme.background};
   
  }
  .bookname {
      box-shadow:  ${props => props.theme.shadow};
      border: ${props => props.theme.border}
  }
  .header-nav-links li{
    color: ${props => props.theme.body};
  }
  .header-nav-links li:hover{
    color: #626264;
  }

`;


const App =() => {
  return (
    <Router>
      <Wrapper>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/home/" component={Home} /> */}
          <Route path="/shelf/" exact component={Shelf} />
          <Route path="/shelf/:url" component={ItemDetail} />
        </Switch>
      </div>
      </Wrapper>
    </Router>
  );
}


export default App;
