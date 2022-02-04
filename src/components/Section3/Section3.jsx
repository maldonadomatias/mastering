import React from 'react';
import './Section3.css';
import {GrIntegration} from 'react-icons/gr';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import {SiBaremetrics} from 'react-icons/si';
import {VscSettings} from 'react-icons/vsc';


const Text = () => {
    return (
        <div>
            <section>

                <div className='divLayout'>
                    <p className='textTitle'>Why Bassify?</p>
                    <h2>A technology-first approach to payments and finance</h2>
                </div>

                <div className='fourTextInfo'>
                    <div>
                        <GrIntegration className='textInfoIcon'/>
                        <p className='textTitle'>Close to the metal</p>
                        <p>From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
                    </div>
                    <div>
                        <AiOutlineDoubleRight className='textInfoIcon'/>
                        <p className='textTitle'>Fastest-improving platform</p>
                        <p>We release hundreds of features and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)</p>
                    </div>
                    <div>
                        <SiBaremetrics className='textInfoIcon'/>
                        <p className='textTitle'>Battle-tested reliability</p>
                        <p>Our systems operate with 99.99%+ uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.</p>
                    </div>
                    <div>
                        <VscSettings className='textInfoIcon'/>
                        <p className='textTitle'>Intelligent optimizations</p>
                        <p>Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.</p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Text 