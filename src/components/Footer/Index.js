import React from 'react'
import Iphone from './Iphone'
import LogoPersian from './Logo'
import Connect from './Connect'
import About from './About'
import DigiApp from './Digi-app'
import End from './End'
import './scss/style.scss'

export default function index () {
  return (
    <div className='Footer'>
      <Iphone />
      <LogoPersian />
      <Connect />
      <About />
      <DigiApp />
      <End />
    </div>
  )
}
