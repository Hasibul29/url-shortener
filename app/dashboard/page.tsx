"use client";
import { useEffect, useState } from "react";

interface URLS {
    originalUrl: string;
    shortUrl: string;
}

const Dashboard = () => {
    const [urls, setUrls] = useState<URLS[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/myurls", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                if (response.ok) {
                    const returnedVal = await response.json();
                    setUrls(returnedVal.data);
                    console.log(returnedVal);
                } else {
                    console.error("Error:", response);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Your URLs</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Short URL</th>
                        <th className="px-4 py-2">Original URL</th>
                    </tr>
                </thead>
                <tbody>
                    {urls ? (
                        urls.map((url) => (
                            <tr key={url.shortUrl}>
                                <td className="border px-4 py-2">
                                    <a href={url.shortUrl}>{url.shortUrl}</a>
                                </td>
                                <td className="border px-4 py-2">
                                    <a href={url.originalUrl}>
                                        {url.originalUrl}
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
