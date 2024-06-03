import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
                                <Link className="menu__link btn" to="#home">
                                    <span className="menu__caption">Home</span>
                                    <i className="ph-bold ph-house-simple" />
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link btn" to="#about">
                                    <span className="menu__caption">About Me</span>
                                    <i className="ph-bold ph-user" />
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link btn" to="#resume">
                                    <span className="menu__caption">Resume</span>
                                    <i className="ph-bold ph-article" />
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link btn" to="#skills">
                                    <span className="menu__caption">Skills</span>
                                    <i className="fa-solid fa-laptop-code" />
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link btn" to="#portfolio">
                                    <span className="menu__caption">Portfolio</span>
                                    <i className="ph-bold ph-squares-four" />
                                </Link>
                            </li>
                            <li className="menu__item">
                                <Link className="menu__link btn" to="#contact">
                                    <span className="menu__caption">Contact</span>
                                    <i className="ph-bold ph-envelope" />
                                </Link>
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
                        href="mailto:wikum.dev@gmail.com?subject=Let's%20Communicate"
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