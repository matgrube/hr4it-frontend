import React, {useEffect} from "react";
import { Alert as AntAlert } from "antd";
import { AlertMessages } from "./AlertMessages";
import { InfoCircleOutlined, CloseCircleOutlined, WarningOutlined, CheckCircleOutlined } from "@ant-design/icons";

export interface AlertProps {
    type: "info" | "error" | "warning" | "success";
    message: string;
    description?: string;
    showIcon?: boolean;
    closable?: boolean;
}

export const Alert: React.FC<AlertProps> = (
    { type, description, message, showIcon, closable } = AlertMessages.EMPTY_INFO,
) => {
    useEffect(() => {
        console.log(type)
    });

    const icon  = 
        !description && 
        (type === "success" ? (
            <CheckCircleOutlined />
        ) : type === "warning" ? (
            <WarningOutlined />
        ) : type === "info" ? (
            <InfoCircleOutlined />
        ) : (
            <CloseCircleOutlined />
        ));
    return (
        <AntAlert
            className={`alert alert--${type}`}
            message={message}
            type={type}
            showIcon={showIcon}
            description={description}
            icon={icon}
        />
    );
};
