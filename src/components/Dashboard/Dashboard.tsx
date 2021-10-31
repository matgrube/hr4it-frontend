import React from "react";
import {AlertMessages} from "../interaction/Alert/AlertMessages";
import { Alert } from "../interaction/Alert/Alert";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>This is a dashboard</h1>
            <Alert {...AlertMessages.EMPTY_INFO} />
        </div>
    )
}

export default Dashboard;
