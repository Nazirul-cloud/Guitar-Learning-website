import React from 'react';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className='main-footer mt-5'>
            <div className="footer-middle bg-dark">
            <div className="container text-info p-4">
                <div className="row">
                      {/* column-1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>ONLINE GUITAR LESSONS</h4>
                        <ul className="list-unstyled">
                            <li>Learn to play guitar</li>
                            
                        </ul>
                    </div>
                      {/* column-2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>PRIVATE GUITAR LESSONS</h4>
                        <ul className="list-unstyled">
                            <li>Aylesbury</li>
                            <li>Skype</li>
                            <li>Birmingham</li>
                            <li>Oxford</li>
                        </ul>
                    </div>
                      {/* column-3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LATEST NEWS</h4>
                        <ul className="list-unstyled">
                            <li>Guitar Blog</li>
                          
                        </ul>
                    </div>
                      {/* column-4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>CONTACT CODE</h4>
                        <ul className="list-unstyled">
                            <li>Are you guitar tutor</li>
                            <li>Contact</li>
                            <li>About Cookies</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-center p-5">
                    <img className="mx-4" src={logo}width="35"
                        height="35" alt="" /> 
                        &copy;{new Date().getFullYear()} Code-Guitar App - All Rights Reserved
                       
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;

