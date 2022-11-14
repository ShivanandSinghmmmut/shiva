import './App.css';
import React from 'react';

const Main =()=>{
    return(
        <>
            <div className='main-section'>
               <div className='main-section-content'>
               <div className='main-section-right'>
                    <div className="main-right-content">
                    <h3>Hello my name is <span>Shivanand Singh</span> </h3>
                    
                    <p>
                    I am a frontend web developer and a competetive coder. 
                    I code in  C++ Programming language. 
                    I am also learning Backend development, 
                    and my college is Madan Mohan Malaviya University Of Technology
                    </p>

                    <div className='main-right-btn'>
                    <button>Download CV</button>
                    <button>Let's Talk</button>
                    </div>
                </div>
                </div>
                
                <div className='main-section-left'>
                <div className='main-left-img'>
                <img src={require("./img/shiva3.jpg")} alt='shiva'></img>
                </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default Main;

