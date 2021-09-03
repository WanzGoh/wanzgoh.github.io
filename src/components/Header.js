import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              HELLO {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h3>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h3>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a className="primary-btn"><Link to="about" smooth duration={1000}>Know more</Link></a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
