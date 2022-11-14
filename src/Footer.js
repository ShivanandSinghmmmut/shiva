import React from "react";


const Footer = ()=>{
    return(
        <>
            <div className="footer-section">
                <div className="footer-content">
                    <div className="footer-social-media">
                        <ul>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-facebook-square"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                            <li><i className="fa fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="">about</a></li>
                            <li><a href="">My Experience</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Footer;