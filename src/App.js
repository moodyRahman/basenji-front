import './App.css';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import { Nav } from 'react-bootstrap';

function App() {
  const [active, setActive] = useState("/")
  return (
    <Router>
      <Nav
        activeKey={active} 
        onSelect={(selectedKey) => {
          console.log("HIT THE NAVBAR LOL")
          setActive(selectedKey);
          }}>
        
        <Nav.Item>
          <Nav.Link as={Link} to="/"> root </Nav.Link>
        </Nav.Item>

      </Nav>

      <Route path="/" >
        <Home /> 
      </Route>

    </Router>
  );
}

export default App;
