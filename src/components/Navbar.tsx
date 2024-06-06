import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <>
            {/* Header Start */}
            <header id="header" className="header d-flex justify-content-between">
                {/* Navigation Menu Start */}
                <div className="header__navigation">
                    <nav id="menu" className="menu">
                        <ul className="menu__list d-flex justify-content-start">
                            <li className="menu__item">
                                <a className="menu__link btn" href="/#home">
                                    <span className="menu__caption">Home</span>
                                    <i className="ph-bold ph-house-simple" />
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="/#about">
                                    <span className="menu__caption">About Me</span>
                                    <i className="ph-bold ph-user" />
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="/#resume">
                                    <span className="menu__caption">Resume</span>
                                    <i className="ph-bold ph-article" />
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="/#skills">
                                    <span className="menu__caption">Skills</span>
                                    <i className="fa-solid fa-laptop-code" />
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="/#contact">
                                    <span className="menu__caption">Contact</span>
                                    <i className="ph-bold ph-envelope" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Navigation Menu End */}
                {/* Header Controls Start */}
                <div className="header__controls d-flex justify-content-end">
                    <a
                        id="notify-trigger"
                        className="header__trigger btn"
                        href="mailhref:wikum.dev@gmail.com?subject=Let's%20Communicate"
                    >
                        <span className="trigger__caption">Let's Communicate</span>
                        <i className="ph-bold ph-chat-dots"></i>
                    </a>

                </div>
                {/* Header Controls End */}
            </header>
            {/* Header End */}
        </>

    );
};

export default Navbar;