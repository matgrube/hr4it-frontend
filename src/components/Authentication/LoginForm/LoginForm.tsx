import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { LoginInput, PasswordInput } from "../../DataEntry/Input/Input";
import Button from "../../interaction/Button"
import { LoginFormValidationSchema } from "../../../validationSchemas/validations";
import { LoginFormRequest } from "../../../pages/LoginPage/LoginPage";
import {publicPaths} from "../../../routes/paths";

interface LoginFormProps {
    onSubmit: (values: LoginFormRequest) => void;
}

const initialValues: LoginFormRequest = {
    login: "",
    password: "",
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
}) => {
    const history = useHistory()
    const handleClick = () => {
        history.push(publicPaths.dashboard);
    };
    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={LoginFormValidationSchema} 
            validateOnBlur 
            onSubmit={onSubmit}>
           {({values, handleSubmit, handleChange}) => (
                <form className="loginForm" onSubmit={handleSubmit}>
                        <LoginInput 
                            name="login" 
                            labelText="Login" 
                            onChange={handleChange}
                            defaultValue={values.login}
                        />
                    <PasswordInput name="password" labelText="Password" visibilityToggle />
                    <Button 
                        buttonType="button"  
                        className="button"
                        label="Sign In" 
                        type="primary"
                        onClick={handleClick}
                    >
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default LoginForm;
