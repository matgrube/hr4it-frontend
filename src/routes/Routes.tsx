import React from "react";
import { Switch, Redirect } from "react-router-dom";
import PublicRoute from "./publicRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import { publicPaths } from "./paths";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <PublicRoute render={(props) => <Dashboard />} path={publicPaths.dashboard} />
            <PublicRoute render={(props) => <LoginPage />} path={publicPaths.signin} />
            <Redirect to={publicPaths.signin} />
        </Switch>
    )
}
