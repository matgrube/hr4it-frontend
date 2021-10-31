import React from "react";
import { RouteProps, useHistory } from "react-router";
import LoginForm from "../../components/Authentication/LoginForm/LoginForm";
import { LoginRegisterLayout } from "../../Layouts/LoginRegisterLayout";
import { publicPaths } from "../../routes/paths";

export interface LoginFormRequest {
    login: string;
    password: string;
}

const LoginPage: React.FC<RouteProps> =  () => {
    const history = useHistory();
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
                    <h3 className="signIntoAccount">Sign In using your LDAP credentials</h3>
                    <LoginForm onSubmit={handleSubmit} />
                </div>
            </div>
        </LoginRegisterLayout>
    )
}

export default LoginPage;
