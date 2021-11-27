import React, { useState } from "react";
import { RouteProps, useHistory } from "react-router";
import LoginForm from "../../components/Authentication/LoginForm/LoginForm";
import { LoginRegisterLayout } from "../../Layouts/LoginRegisterLayout";
import { publicPaths } from "../../routes/paths";
import { Alert } from "../../components/interaction/Alert/Alert";
import { AlertMessages } from "../../components/interaction/Alert/AlertMessages";

export interface LoginFormRequest {
    login: string;
    password: string;
}

const LoginPage: React.FC<RouteProps> =  () => {
    const history = useHistory();
    const [alert, setAlert] = useState<boolean>(false);
    const handleSubmit = (values: LoginFormRequest) => {
        try {
            console.log(values);
            history.push(publicPaths.dashboard);
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <LoginRegisterLayout>
            <div className="loginPage">
                <div className="login">
                    {!!alert && <Alert {...AlertMessages.GENERIC_ERROR} />}
                    <h3 className="signIntoAccount">Sign In using your LDAP credentials</h3>
                    <LoginForm onSubmit={handleSubmit} />
                </div>
            </div>
        </LoginRegisterLayout>
    )
}

export default LoginPage;
