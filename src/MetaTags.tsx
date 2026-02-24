import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutMeData } from "./types";

const MetaTags: React.FC<{ info: AboutMeData }> = ({ info }) => {
    return (
        <Helmet>
            <title>{info.name}</title>
            <meta name="description" content={info.introduction} />
            <meta property="og:image" content={`${process.env.PUBLIC_URL}/favicon.ico`} />
            <meta property="og:title" content={info.name} />
        </Helmet>
    );
};

export default MetaTags;
