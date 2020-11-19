import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="container-fluid">
                <div className="header-body text-right pr-4">
                    <h1 className="header-text">Welcome to <br />Image Editing Bootcamp</h1>
                    <div className="register-btn">
                    <button className="register-btn">Register</button>
                    </div>
                    <div className="header-card text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="learn">
                                <h3>Learn</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="explore">
                            <h3>Explore</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="earn">
                            <h3>Earn</h3>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;