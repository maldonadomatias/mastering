import React from 'react'
import {Parallax} from 'react-parallax';

import './Banner.css'

const image1 = 'https://images.unsplash.com/photo-1621586198767-9bdda7ea5bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80';

const Banner = () => {
    return (
        <div>
            <Parallax className='parallax' bgImage={image1}>
                <div className='bannerText' style={{height: '25rem'}}>
                  <div>
                      <h2>BASSIFY</h2> <br/>
                      <p>MUSIC FOR YOUR EARS</p>
                  </div> 
                </div>
            </Parallax>
        </div>
    )
}

export default Banner
