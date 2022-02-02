import React from "react";
import './Section2.css'

import {MdKeyboardArrowRight} from 'react-icons/md'


const Section = () => {
  return (
      <div>
        <div className="relativeBackground">
          <div className="sectionBackground">
          <section id="sectionDegree">
              <div className='divLayoutNegative'>
                  <p className='textTitleNegative'>Unified platform</p>
                  <h2>A fully integrated suite of payments products</h2>
              </div>
              <div className='divLayout2Negative'>
                  <p className='textParagraphNegative'>We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.</p>

                  <p className='textParagraphNegative'>We also help companies beat fraud, send invoices, issue virtual and physical cards, get financing, manage business spend, and much more.</p>
              </div>
              <div className='divLayoutNegative'>
                  <button className='buttonNegative'>Start with payment <MdKeyboardArrowRight/></button>
              </div>
          </section>
          </div>
        </div>
      </div>
  )
};

export default Section;
