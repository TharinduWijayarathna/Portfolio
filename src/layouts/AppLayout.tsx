import React, { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";
import Root from "../components/Root";

const AppLayout: React.FC<PropsWithChildren<{}>> = (props) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            {props.children}
            <Root />
        </>
    );
};

export default AppLayout;