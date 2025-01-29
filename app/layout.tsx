import {jetbrainsMono} from "@/app/ui";
import {NavBar} from "@/app/ui/navigation/NavBar";
import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Russell Peiris",
    description: "Portfolio of Russell Peiris",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${jetbrainsMono.className} antialiased`}
        >
        <NavBar/>
        {children}
        </body>
        </html>
    );
}
