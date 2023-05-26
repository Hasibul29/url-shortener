"use client";
import Signup from "@/components/Signup";
import { SetStateAction } from "react";

const SignupPage = async () => {
    const submit = async (
        email: SetStateAction<string>,
        password: SetStateAction<string>,
        confirmPassword: SetStateAction<string>,
    ) => {
        try {
            const response = await fetch("http://127.0.0.1:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                }),
            });
            if (response.ok) {
                window.location.replace("/login");
                console.log(await response.json());
            }
            console.log(await response.json());
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <div>
            <Signup submit={submit} />
        </div>
    );
};

export default SignupPage;
