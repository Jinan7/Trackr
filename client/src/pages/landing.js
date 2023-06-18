import React from 'react'
import {Logo} from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
    return <Wrapper>
    <nav>
      <Logo/>
    </nav>
    <div className='container page'>
      <div className='info'>
        <h1>Job <span>Trackr</span></h1>
        <p>
        'm baby 8-bit listicle solarpunk vexillologist 
        synth chambray. Plaid jianbing pour-over twee, 
        yr yuccie chia four dollar toast leggings activated 
        charcoal. Hell of waistcoat scenester roof party banh 
        mi gorpcore VHS pok pok meh salvia polaroid. 
        Chambray adaptogen air plant tilde ugh, mlkshk 
        venmo put a bird on it yr.
        </p>
        <button className='btn btn-hero'>Login/Register</button>
      </div>
      <div>
        <img src={main} alt='Job track' className='img main-img'></img>
      </div>
    </div>
  </Wrapper>
}


export default Landing