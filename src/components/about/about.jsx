import React from 'react'
import './about.css'
import profileImg from '../../assets/aboutProfile.png'

const about = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src='' alt=''/> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src ={profileImg} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-right">
                    <p>I am Computer Engineering student of Thapathali Campus, IOE. I am keen at learning new technologies.</p>
                    <p>I beliece in team work and enthusiasm. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about