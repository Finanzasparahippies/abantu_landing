/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const GreenTheme = ({ children, bdOn }) => {
    if (bdOn) {
        React.useEffect(() => {
            document.querySelector("body").classList.add("bd-green");
            return () => {
                document.querySelector("body").classList.remove("bd-green");
            };
        });
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/green.css" />
            </Head>
            {children}
        </>
    );
};

export default GreenTheme;
