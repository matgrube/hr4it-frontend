import React from "react";
import type { LayoutProps } from "../Interface";

export const LoginRegisterLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <div className="loginRegisterLayout">
            <div className="logoField">
            </div>
            <div className="contentField">
                {children}
            </div>
        </div>
    )
}
