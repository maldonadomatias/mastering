import React, {Component} from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md'
import classnames from "classnames";

import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true
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
                <li><button>Products</button></li>
                <li><button>Sales</button></li>
                <li><button>About</button></li>
            </ul>
            <ul className='growButton'>    
                <a id='prices' href="">Prices <MdKeyboardArrowRight style={{ margin: '0px 0px 0px 20px' }}/></a>
            </ul>
        </nav>
    </div>
 )
};
}
