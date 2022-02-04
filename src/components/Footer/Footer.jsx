import React from "react";
import './Footer.css'
import {FaCopyright, FaLocationArrow} from 'react-icons/fa';
import {BsChatFill} from 'react-icons/bs';


const Footer = () => {
  return (
  <div>
     <footer className='fourTextFooter'>

         <div>
            <h2 id='logoNegative' style={{color: '#fff !important' }}>BASSIFY</h2>
            <p><FaLocationArrow  style={{marginRight: '5px'}}/>United States</p>
            <p><BsChatFill style={{marginRight: '5px'}}/>English (United States)</p>
            <p className="copyright"><FaCopyright/> 2021 Matías A. Maldonado. All Rights Reserved. Terms, Privacy &amp; Accessibility</p>
         </div>

         <div>
            <p className='textTitleFooter'>Products</p>
            <ul>
                <li>Atlas</li>
                <li>Billing</li>
                <li>Capital</li>
                <li>Checkout</li>
                <li>Payments</li>
                <li>Tax</li>
            </ul>
         </div>

         <div>
            <p className='textTitleFooter'>Developers</p>
            <ul>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>API Status</li>
            </ul> <br />
            <p className='textTitleFooter'>Company</p>
            <ul>
                <li>About</li>
                <li>Customers</li>
                <li>Enterprise</li>
                <li>Partners</li>
                <li>Jobs</li>
                <li>Blog</li>
            </ul>
         </div>

         <div>
            <p className='textTitleFooter'>Use cases</p>
            <ul>
                <li>SaaS</li>
                <li>Platforms</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
                <li>Creator Economy</li>
            </ul> <br />
            <p className='textTitleFooter'>Resources</p>
            <ul>
                <li>Support</li>
                <li>Contact</li>
                <li>Guides</li>
                <li>Privacy &amp; Terms</li>
                <li>Licenses</li>
                <li>COVID-19</li>
            </ul>
         </div>


     </footer>    
     
  </div>
 )
};

export default Footer;
