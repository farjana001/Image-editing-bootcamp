import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="container-fluid">
                <div className="footer-body text-center">
                    <h3 className="text-white">Contact Us</h3>
                    <p><strong>Street : </strong> 329, xx xxxx <br/><strong>City: </strong> xxyy zzz <br/><strong>Phone: </strong> xx xxx xxx xxx <br/><strong>Email: </strong> <em>imageeditingbootcamp@gmail.com</em></p>
                </div>
                <p className="copy text-center">&copy; All Rights Reserved by Image Editing Bootcacp</p>
            </div>
        </footer>
    );
};

export default Footer;