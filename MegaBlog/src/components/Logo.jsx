import React from "react";
import MegaBlog from "../assets/MegaBlog.png";
function Logo({ width = "100px" }) {
    console.log(MegaBlog);
    return (
        <div>
            <img src={MegaBlog} />
        </div>
    );
}

export default Logo;
