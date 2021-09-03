import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"




const About = () => {
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (

    <div className= "section" id="about">
    <div className="container">
    <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
      <div className="about-wrapper">
        <div>
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="about-wrapper__image">
            <img src={data.aboutImage} alt="About Image"/>
            </div>
          </Fade>
        </div>
        <div>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">{data.aboutParaOne}</p>
              <p className="about-wrapper__info-text">{data.aboutParaTwo}</p>
              <p className="about-wrapper__info-text">{data.aboutParaThree}</p>
              <Fade bottom>
              <a className ="primary-btn" href={data.resume}>
                Linked In
              </a>
            </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default About
