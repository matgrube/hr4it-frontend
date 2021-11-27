import React from "react";
import { Formik } from "formik";
import { LoginInput, PasswordInput } from "../../DataEntry/Input/Input";
import Button from "../../interaction/Button"
import { LoginFormValidationSchema } from "../../../validationSchemas/validations";
import { LoginFormRequest } from "../../../pages/LoginPage/LoginPage";

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
                        buttonType="submit"  
                        className="button"
                        label="Sign In" 
                        type="primary"
                    >
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default LoginForm;
