
"use client";

import { AuthContextProvider } from "@/context/AuthContext";

// import { AuthContextProvider } from "./AuthContext";


const Providers = ({ children }) => {
    return (

        <AuthContextProvider>{children}</AuthContextProvider>

    );
};

export default Providers;