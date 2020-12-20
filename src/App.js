import React from 'react';
import './index.css'



const App = () => {
  return (
    <div>
      <div className="title">YFD Lab</div>
    <Navbar>
      <NavItem icon="😊"/>
      <NavItem icon="👾"/>
      <NavItem icon="🐤"/>
    </Navbar>

    <Context></Context>
    
    </div>

 
   
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

const Context = (props)=> {
  return(
    <div className="context">
      Welcome to YFD Lab, enjoy experiment here.

     <div>
     <button class="cybr-btn">
  Start<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">Start_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>

     </div>
    </div>
  )
}

export default App
