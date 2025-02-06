import React from 'react';
import './about.css';
import profileImg from '../../assets/aboutProfile.png';
import resumePdf from '../../assets/resume.pdf'; // Import the resume file

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profileImg} alt='Profile' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Computer Engineering student at Thapathali Campus, IOE. I am keen on learning new technologies and applying them to solve real-world problems.</p>
                        <p>I believe in teamwork, enthusiasm, and continuous improvement.</p>
                    </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>3+</h1>
                            <p>Years of Experience</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    {/* Add a "My Resume" button
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-button">
                        My Resume
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default About;