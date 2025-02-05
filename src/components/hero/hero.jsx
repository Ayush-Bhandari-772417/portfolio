import React from 'react'
import './hero.css'
import profile from '../../assets/profile.png'

const hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt=""/>
        <h1><span>I'm Ayush Bhandari</span>, keen learner</h1>
        <p>Computer Engineering Student</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default hero