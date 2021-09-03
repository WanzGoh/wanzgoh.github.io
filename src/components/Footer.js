import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="primary-btn" href={`mailto:${data.contactEmail}`}>
            Let's Talk
          </a>
          <div className="back-to-top">
          <Link to="header" smooth duration={1000}>
            <i aria-hidden="true" />
          </Link>
        </div>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
          © {new Date().getFullYear()} Design by{" "}
            <a href="#">Yuwan Go</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
