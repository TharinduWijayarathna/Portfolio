import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Preloader = () => {
    return (
        <>
        {/* Loader Start */}
        <div id="loader" className="loader">
          <div id="loaderContent" className="loader__content">
            <div className="loader__shadow" />
            <div className="loader__box" />
          </div>
        </div>
        {/* Loader End */}
      </>
      
    );
};

export default Preloader;