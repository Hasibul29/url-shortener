import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata = {
    title: "Url Shortener",
    description: "Url Shortener App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
}
