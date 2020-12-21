import React from 'react';
import './index.css'

import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as MessengerIcon} from './icons/messenger.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import {ReactComponent as PlusIcon} from './icons/plus.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'
import {ReactComponent as ChevronIcon} from './icons/chevron.svg'
import {ReactComponent as ArrowIcon} from './icons/arrow.svg'
import {ReactComponent as BoltIcon} from './icons/bolt.svg'



const App = () => {
  return (
    <div>
      <div className="title">DeFi Lab</div>
    <Navbar>
      <NavItem icon= {<PlusIcon/>}/>
      <NavItem icon={<BellIcon/>}/>
      <NavItem icon={<MessengerIcon/>}/>
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
      Welcome to DeFi Lab, enjoy experiment here.

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
