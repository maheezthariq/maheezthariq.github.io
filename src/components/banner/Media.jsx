import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs, FaInstagram, FaBehance } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail, SiFlutter, SiCss3, SiHtml5, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro,SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/maheezthariq" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </span>
            {/* <span className="bannerIcon">
              <a href="mailto:maheezmtm@gmail.com">
                <SiGmail />
              </a>
            </span> */}
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/maheezthariq/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.instagram.com/maheez.thariq/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.behance.net/maheezthariq" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
            </span>
          </div>
        <br/>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST TECH STACK 
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
          <br />
          <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST DESIGN STACK 
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
            </span>
            <span className="bannerIcon">
              <SiAdobeillustrator />
            </span>
            <span className="bannerIcon">
              <SiAdobepremierepro />
            </span>

          </div>
          </div>

          </div>
        </div>
      </div>
  )
}

export default Media