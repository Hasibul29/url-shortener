"use client";
import Login from "@/components/Login";
import { SetStateAction } from "react";

const LoginPage = () => {
    const submit = async (
        email: SetStateAction<string>,
        password: SetStateAction<string>,
    ) => {
        const response = await fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email: email, password: password }),
        });
        if (response.ok) {
            window.location.replace("/dashboard");
        }
        const returnedVal = await response.json();
        console.log(returnedVal);
    };

    return <Login submit={submit} />;
};

export default LoginPage;
