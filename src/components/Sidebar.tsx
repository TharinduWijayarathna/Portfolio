import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            {/* Avatar Side Block Start */}
            <div id="avatar" className="avatar">
                <div className="avatar__container d-flex flex-column justify-content-lg-between">
                    {/* image and logo */}
                    <div className="avatar__block">
                        <div className="avatar__logo d-flex align-items-center">
                            <div className="logo__caption">
                                <p>Lankesh Halangoda</p>
                            </div>
                        </div>
                        <div className="avatar__image">
                            <img
                                src="assets/img/avatars/lankesh.jpeg"
                                alt="Braxton - Personal Portfolio & Resume HTML Template Avatar"
                            />
                        </div>
                    </div>
                    {/* data caption #1 */}
                    <div className="avatar__block">
                        <h6>
                            <small className="top">Designation:</small>
                            Software Engineering Professional
                        </h6>
                    </div>
                    {/* data caption #2 */}
                    <div className="avatar__block">
                        <h6>
                            <small className="top">From:</small>
                            Kandy, Sri Lanka
                        </h6>
                    </div>
                    {/* socials and CTA button */}
                    <div className="avatar__block">
                        <div className="avatar__socials">
                            <ul className="socials-square d-flex justify-content-between">
                                <li className="socials-square__item">
                                    <a
                                        className="socials-square__link btn"
                                        href="https://www.linkedin.com/in/lankeshhalangoda/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="socials-square__item">
                                    <a
                                        className="socials-square__link btn"
                                        href="https://github.com/lankeshhalangoda"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-github" />
                                    </a>
                                </li>
                                <li className="socials-square__item">
                                    <a
                                        className="socials-square__link btn"
                                        href="https://stackoverflow.com/users/23758725/lankesh-halangoda"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-stack-overflow" />
                                    </a>
                                </li>
                                <li className="socials-square__item">
                                    <a
                                        className="socials-square__link btn"
                                        href="https://twitter.com/lankelk"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-x-twitter" />
                                    </a>
                                </li>
                                <li className="socials-square__item">
                                    <a
                                        className="socials-square__link btn"
                                        href="https://www.facebook.com/reallankelk"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="avatar__btnholder">
                            <a
                                className="btn btn-default btn-fullwidth btn-hover btn-hover-accent"
                                href="#contact"
                                target="_blank"
                            >
                                <span className="btn-caption">Let's Work Together!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Avatar Side Block End */}
        </>


    );
};

export default Sidebar;