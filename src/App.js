import React, { useState, useEffect, useRef } from 'react';
import './index.css'

import {ReactComponent as BellIcon} from './icons/bell.svg'
import {ReactComponent as MessengerIcon} from './icons/messenger.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import {ReactComponent as PlusIcon} from './icons/plus.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'
import {ReactComponent as ChevronIcon} from './icons/chevron.svg'
import {ReactComponent as ArrowIcon} from './icons/arrow.svg'
import {ReactComponent as BoltIcon} from './icons/bolt.svg'
import { Icon } from '@material-ui/core';
import { MetaMaskButton,Flex, Box } from 'rimble-ui';
import {CSSTransition} from 'react-transition-group';
import Web3 from 'web3';




function App() {


  // State

  let [account,setAccount] = useState("");

  // State

    useEffect(() => {
      ethEnabled();
    
    }
    )




const ethEnabled = async() => {
  
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.enable();

    const web3js = await window.web3;
    const accounts = await web3js.eth.getAccounts();
    setAccount(accounts[0]);  
    
  }


  console.log(0);
  return false;
}

const refreshPage = ()=> {
  window.location.reload(false);
}




  // function

 

 

 


    // function



  



  return (
    
    <div>

<div className="title">DeFi Lab</div>

    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>

     
    </Navbar>
    <Context accounts={account} ethEnabled={ethEnabled} refreshPage={refreshPage}></Context>
    </div>
    

   
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>

          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Tutorial
          </DropdownItem>


          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Project
          </DropdownItem>


        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Solidity !</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Context(props) {
  return(
    <div className="context">
      <div className="spacing-bottom">
      Welcome to DeFi Lab, enjoy experiment here.
      </div>

     <div>
     <button class="cybr-btn" onClick={props.refreshPage}>
  REFRESH<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">REFRESH_</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
     </div>

{/* Separate line */}

<div className="separateLine">
<Flex>
  <Box p={0.2} width={1 / 2} color="salmon" bg="black">
    Separate
  </Box>
  <Box p={0.2} width={1 / 2} color="white" bg="salmon">
  line
  </Box>
</Flex>
</div>



{/* Separate line */}


{/* Connect Metamsk wallet */}

    <div className="metaMaskButton">
    <div>MetaMask Wallet Connect:</div>
    
    <MetaMaskButton className="spacingTop" onClick={props.ethEnabled}>Connect with Wallet</MetaMaskButton>
    <div className="spacingTop walletAddress">{props.accounts}</div>
    

    {/* {account} */}
    </div>
    


{/* Connect Metamsk wallet */}

    
    </div>
  )
}

export default App;





