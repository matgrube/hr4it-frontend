import React from "react";
import { Input as AntInput } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { SizeType } from "antd/lib/config-provider/SizeContext";

interface InputProps {
    labelText?: string;
    placeholder?: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
    visibilityToggle?: boolean;
    defaultValue?: string;
    size?: SizeType;
    type?: string;
}

export const LoginInput: React.FC<InputProps> = ({
    name,
    labelText,
    placeholder = labelText,
    defaultValue,
    onChange,
    error = "",
    disabled = false,
    type = "text",
    size = "large",
}) => {
    return (
        <div className="inputWrapper">
            {!!labelText && (
                <label htmlFor={name} className="label">
                    {labelText}
                </label>
            )}
            <AntInput
                size={size}
                type={type}
                defaultValue={defaultValue}
                disabled={disabled}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                prefix={(<UserOutlined />)}
            />
            <div className="validationContainer">{!!error && <span className="validationError">{error}</span>}</div>
        </div>
    )
}

export const PasswordInput: React.FC<InputProps> =  ({
    name,
    labelText,
    placeholder = labelText,
    defaultValue,
    onChange,
    error = "",
    disabled = false,
    type = "password",
    size = "large",
    visibilityToggle
}) => {
    return (
        <div className="inputWrapper">
            {!!labelText && (
                <label htmlFor={name} className="label">
                    {labelText}
                </label>
            )}
            <AntInput.Password 
                name={name}
                type={type}
                defaultValue={defaultValue}
                disabled={disabled}
                size={size}
                placeholder={placeholder} 
                onChange={onChange} 
                onError={() => console.error(error)} 
                visibilityToggle={visibilityToggle}
                prefix={(<KeyOutlined />)}
            />
            <div className="validationContainer">{!!error && <span className="validationError">{error}</span>}</div>
        </div>
    )
}
