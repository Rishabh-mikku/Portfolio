import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact, FaAws } from "react-icons/fa";
import { SiSpringboot, SiTensorflow } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://github.com/Rishabh-mikku' target='_blank'><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/rishabh-swe/' target='_blank'><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.instagram.com/mikku_rishabh/' target='_blank'><FaInstagram /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTensorflow />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media