import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/buy'>Buy</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+17342103747"><i className="fa fa-phone" /></a><br />
                        <a role="button" className="btn btn-link" href="mailto:cosmophenomenology@gmail.com"><i className="fa fa-envelope-o" /> cosmophenomenology@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
