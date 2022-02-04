import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {MdKeyboardArrowRight} from 'react-icons/md'
import {CgMenuRight} from 'react-icons/cg'
import classnames from "classnames";
import Portal from '../Portal/Portal'


import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true,
        openModal: false,
        isMobile: false
      };
    }
  
    // Adds an event listener when the component is mount.
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  
    // Hide or show the menu.
    handleScroll = () => {
      const { prevScrollpos } = this.state;
  
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
  
      this.setState({
        prevScrollpos: currentScrollPos,
        visible
      });
    };

  

    
  
render() {
  
  return (
    <Router>
      <div className='container'>
          <nav
          className={classnames("navbar", {
            "navbar--hidden": !this.state.visible
          })}
          >
              <ul>
                  <h2 id='logo'>BASSIFY</h2>
              </ul>

              <ul className='navListButtons'>
                  <li><button className='openModalBtn' onMouseEnter={() => this.setState({ openModal: true })}>Products</button>{this.state.openModal && <Portal style={{transition: 'ease-out 0.3s'}} closeModal={() => this.setState({ openModal: false })}/>}</li>
                  <li><button className='openModalBtn'>Sales</button></li>
                  <li><button className='openModalBtn'>About</button></li>
              </ul>
      
    

              <ul className='growButton'>    
                  <a id='prices' href="">Sign In <MdKeyboardArrowRight style={{ margin: '0px 0px 0px 20px' }}/></a>
              </ul>

          </nav>
      </div>
    </Router>
 )
};
}
