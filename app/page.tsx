"use client";
import CreateUrl from "@/components/Form";
import { SetStateAction, useState } from "react";

const Main = () => {
    const [url, seturl] = useState("");

    const copy = async () => {
        await navigator.clipboard.writeText(url);
        alert("Text copied");
    };
    const submit = async (data: SetStateAction<string>) => {
        const response = await fetch("http://127.0.0.1:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: data }),
            credentials: "include",
        });
        if (response.ok) {
            const returnedVal = await response.json();
            seturl(returnedVal.url);
        }
    };
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text_center blue_gradient">
                Url Shortener
            </h1>
            <p className="desc text-center">An url shortener microservice</p>
            <CreateUrl submit={submit} />
            <input
                className="w-60 px-5 py-2 ml-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                value={url}
                readOnly
            />
            <button onClick={copy} disabled={!url}>
                Copy To Clipboard
            </button>
        </section>
    );
};

export default Main;
