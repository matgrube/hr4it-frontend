import React from "react";
import { Switch, Redirect } from "react-router-dom";
import PublicRoute from "./publicRoute";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { publicPaths } from "./paths";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <PublicRoute render={(props) => <DashboardPage />} path={publicPaths.dashboard} />
            <PublicRoute render={(props) => <LoginPage />} path={publicPaths.signin} />
            <Redirect to={publicPaths.signin} />
        </Switch>
    )
}
