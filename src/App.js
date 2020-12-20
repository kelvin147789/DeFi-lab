import React from 'react';
import './index.css'



const App = () => {
  return (
    <Navbar>
      <NavItem icon="😊"/>
      <NavItem icon="😊"/>
      <NavItem icon="😊"/>
    </Navbar>
  )
}

const Navbar= (props)=> {
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  

  );
}

const NavItem= (props)=> {
  return(
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  

  );
}

export default App
