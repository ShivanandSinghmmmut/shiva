import React from "react";


const Contact = ()=>{
    return(
        <>
            <div className="contact-section">
                <div className="contact-text"><h1>Contact</h1></div>
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="contact-left-email">
                        <i className='fa fa-envelope-o'></i>
                        <h4>Email</h4>
                        <h5>shivasingh21793@gmail.com</h5>
                        </div>
                        <div className="contact-left-messenger">
                        <i className='fa fa-commenting'></i>
                        <h4>Messenger</h4>
                        <h5>shivanand singh</h5>
                        </div>
                        <div className="contact-left-whatsapp">
                        <i className='fa fa-whatsapp'></i>
                        <h4>whatsapp</h4>
                        <h5>9696238943</h5>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-right-name">
                            <input type="text" placeholder="your name" className="contact-user-name"></input>
                        </div>
                        <div className="contact-right-email">
                            <input type="email" placeholder="your email" className="contact-user-email"></input>
                        </div>
                        <div className="contact-right-message">
                            <input type="text-area" placeholder="your message" className="contact-user-message"></input>
                        </div>
                        <div className="contact-right-btn">
                           <button className="contact-user-btn">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Contact;