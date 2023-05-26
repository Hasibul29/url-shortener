"use client";

import { useEffect } from "react";

const Logout = async () => {
    useEffect(() => {
        const call = async () => {
            const response = await fetch("http://127.0.0.1:3000/logout", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (response.ok) {
                console.log(await response.json());

                window.location.replace("/");
            } else {
                console.error("Error:", response);
            }
        };
        call();
    }, []);
    return <p>Logged out</p>;
};

export default Logout;
