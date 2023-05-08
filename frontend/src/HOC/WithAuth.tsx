import {ReactNode} from "react";
import {NextComponentType} from "next";
import Home from "@/app/(components)/(modules)/home/page";

const withAuth = (Component: NextComponentType) => {
    const Auth = (props: any) => {

        if (!window.localStorage.getItem('token')) {
            return (
                <Home />
            );
        }

        return (
            <Component {...props} />
        );
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;