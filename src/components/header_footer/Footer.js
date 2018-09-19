import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">WBS</div>
        <div className="footer_copyright">
          World Blockchain Summit 2018 | Dubai
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
