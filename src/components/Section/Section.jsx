import React from 'react';
import './Section.css';
import {MdKeyboardArrowRight} from 'react-icons/md'

const Text = () => {
    return (
        <div>
            <section>

                <div className='divLayout'>
                    <p className='textTitle'>Unified platform</p>
                    <h2>A fully integrated suite of payments products</h2>
                </div>

                <div className='divLayout2'>
                    <p className='textParagraph'>We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.</p>

                    <p className='textParagraph'>We also help companies beat fraud, send invoices, issue virtual and physical cards, get financing, manage business spend, and much more.</p>
                </div>

                <div className='divLayout'>
                    <button className='button'>Start with payment <MdKeyboardArrowRight/></button>
                </div>

            </section>
        </div>
    )
}

export default Text 