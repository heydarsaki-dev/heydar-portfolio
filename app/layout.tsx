import type {Metadata} from "next";
import {Sora} from "next/font/google";
import "./globals.css";

//components
import Layout from '@/components/Layout'

const sora = Sora({
    subsets: ["latin"],
    variable: '--font-sora',
    weight:
        ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
    title: "Heydar Saki",
    description: "Heydar Saki Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${sora.variable} font-sora`}>
        <Layout>
            {children}
        </Layout>

        </body>
        </html>
    );
}
