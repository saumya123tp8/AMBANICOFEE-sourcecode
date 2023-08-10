import React from 'react'
import playstore from"../../../images/playstore.png"
import Appstore from"../../../images/Appstore.png"
// import appstore from"../../../images/playstore.png"
import "./footercss.css"
function Footer() {
  return (
    <footer id="footer">
    <div className="leftfooter">
        <h4>Download the app</h4>
        <p>download app for android and ios mobile phone</p>
        <img src={playstore} alt="playstore"/>
        <img src={Appstore}alt="Appstore"/>
    </div>
    <div className="midfooter">
        <h1>JMSWELL</h1>
        <p>copyright 2022 &copy; tonyskuk</p>
    </div>
    
    <div className="rightfooter">
        <h2>follow us</h2>
        <a href="https://www.instagram.com/saumyakeservani/">insta</a>
        <a href="https://www.facebook.com/">twitter</a>
        <a href="https://www.facebook.com/">facebook</a>
    </div>
    </footer>
  )
}

export default Footer