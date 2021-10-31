import type { AlertProps } from "./Alert";

export const AlertMessages = (() => {
    const GENERIC_ERROR: AlertProps = {
        message: "Oops! Something went wrong.",
        description: "Please try again.",
        type: "error",
        showIcon: true,
        closable: true,
    };

    const USER_INVALID_CREDENTIALS: AlertProps = {
        message: "Incorrect username or password.",
        type: "error",
        showIcon: true,
    };

    const INVALID_INPUT: AlertProps = {
        message: "Invalid input.",
        description: "Please try again.",
        type: "error",
        showIcon: true,
    }

    const EMPTY_INFO: AlertProps = {
        message: "",
        description: "",
        type: "info",
        showIcon: false,
        closable: false,
    };

    return  {
        GENERIC_ERROR,
        USER_INVALID_CREDENTIALS,
        EMPTY_INFO,
        INVALID_INPUT,
    }
})();
