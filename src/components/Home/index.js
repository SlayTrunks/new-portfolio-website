import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../Animated'
import './index.scss'
import Logo from '../Animated/Logo'

function Home() {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['l','a','y',' ','T','r','u','n','k','s']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

  return (
    <div className="container home-page">
          <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`} style={{marginLeft:'13px'}}>S</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
          </h1>
          <h2>Full Stack Developer / UI/UX Designer</h2>
            
    </div>
    <Link to='/contact' className='flat-button'>Contact me</Link>
    <Logo />
    </div>
  )
}

export default Home
