import './App.css';
import React from 'react';

const About =()=>{
    return(
        <>
            <div className='about-section'>
              <div className="about-text"><h1>About Me</h1></div>
              <div className='about-section-content'>
               
               <div className='about-section-left'>
               <div className='about-img-box'>
               <img src={require("./img/shiva4.jpg")} alt='shiva'></img>
               </div>
               </div>
               <div className='about-section-right'>
                  <div className='about-section-fields'>
                    <div className='about-experience'>
                        <i className='fa fa-line-chart'></i>
                        <h4>Experience</h4>
                        <h5>1+ year</h5>
                    </div>
                    <div className='about-project'>
                    <i className='fa fa-line-chart'></i>
                    <h4>Projects</h4>
                    <h5>6+ completed</h5>
                    </div>
                  </div>
                <div className='about-paragraph'>
                    <p>lorem sdkfjlk asdfklk sdafksdj dsdf lfkdgsflkjgsdf sfdgjsfdlkgsfd sdfjsdflkgjsdf miksk kssllh gkank dnks
                      kejkid kski sjsi skiid nnmlao dthe swhabat sknw sbtklw hankslk  sjks aslks sdflkjlfdgk fdkflkl fflkfjlf </p>
                    
                </div>
                <div className='about-right-btn'>
                    <button>Let's Talk</button>
                </div>
               
               </div>
               
              </div>
            </div>
        </>
    )
}

export default About;