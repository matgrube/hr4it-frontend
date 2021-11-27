import React from "react";
import { Button as AntButton } from "antd";

export interface ButtonProps {
    shape?: "circle" | "round";
    type?: "primary" | "ghost" | "default" | "dashed" | "link" | "text";
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
    size?: "small" | "default";
    label?: string;
    className: string;
}

const Button: React.FC<ButtonProps> = ({
    type = "primary",
    shape,
    buttonType = "button",
    className,
    label,
    onClick
}) => {
    return (
        <div className="buttonWrapper">
            <AntButton
                shape={shape}
                type={type} 
                htmlType={buttonType} 
                className={className}
                onClick={onClick}
             >
                {label}
            </AntButton>
        </div>
    )
}

export default Button;
