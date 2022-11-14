import React from "react";
import './App.css';


const Portfolio = () => {
     return(
        <>
            <div className="portfolio-section">
            <div className="about-text"><h1>Portfolio</h1></div>
                <div className="portfolio-content">
                    <div className="portfolio-row">
                        <div className="portfolio-column">
                        <img src={require("./img/web1.jpg")} alt='shiva'></img>
                        </div>
                        <div className="portfolio-column">
                        <img src={require("./img/web2.jpg")} alt='shiva'></img>
                        </div>
                        <div className="portfolio-column">
                        <img src={require("./img/web3.jpg")} alt='shiva'></img>
                        </div>
                    </div>

                    <div className="portfolio-row">
                        <div className="portfolio-column">
                        <img src={require("./img/web4.jpg")} alt='shiva'></img>
                        </div>
                        <div className="portfolio-column">
                        <img src={require("./img/web5.jpg")} alt='shiva'></img>
                        </div>
                        <div className="portfolio-column">
                        <img src={require("./img/web6.jpg")} alt='shiva'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}


export default Portfolio;