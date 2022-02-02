import React from 'react';
import './Logos.css'

import logo1 from '../../assets/images/auriculares.png'
import logo2 from '../../assets/images/jugar.png'
import logo3 from '../../assets/images/notas-de-la-musica.png'
import logo4 from '../../assets/images/ondas-sonoras.png'



const Logos = () => {
    return (
        <div className='logoDiv'>
           <section className='logoSection'>
               <div>
                <img className='logoImages' src={logo1} />
                <p className='logoText'>Unique headphone sound experience</p>
               </div>
               <div>
                <img className='logoImages' src={logo2} />
                <p className='logoText'>Unique headphone sound experience</p>
               </div>
               <div>
                <img className='logoImages' src={logo3} />
                <p className='logoText'>Unique headphone sound experience</p>
               </div>
               <div>
                <img className='logoImages' src={logo4} />
                <p className='logoText'>Unique headphone sound experience</p>
               </div>
           </section>
        </div>
    )
}

export default Logos