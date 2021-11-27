import React from "react";
import type { LayoutProps } from "../Interface";
import hr4it_big from "../../assets/img/hr4it_big.png";
import hr4it_small from "../../assets/img/hr4it_small.png";

export const LoginRegisterLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <div className="loginRegisterLayout">
            <div className="logoField">
                <img className="logoBig" src={hr4it_big} alt="" />
                <img className="logoSmall" src={hr4it_small} alt="" />
            </div>
            <div className="contentField">
                {children}
            </div>
        </div>
    )
}
