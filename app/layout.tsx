import type {Metadata} from "next";
import {Sora} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

//components
import Layout from '@/components/Layout'


const yekanBakh = localFont({
    src: [
        {
            path: '../public/fonts/YekanBakhFaNum-Thin.woff',
            weight: '100'
        },
        {
            path: '../public/fonts/YekanBakhFaNum-Light.woff',
            weight: '300'
        },
        {
            path: '../public/fonts/YekanBakhFaNum-Regular.woff',
            weight: '400'
        },
        {
            path: '../public/fonts/YekanBakhFaNum-SemiBold.woff',
            weight: '600'
        },
        {
            path: '../public/fonts/YekanBakhFaNum-Bold.woff',
            weight: '700'
        },
        {
            path: '../public/fonts/YekanBakhFaNum-ExtraBold.woff',
            weight: '800'
        }
    ],
    variable: '--font-yekanbakh'
})

const vazir = localFont({
    src: [
        {
            path: '../public/fonts/Vazir-Thin-FD-WOL.woff',
            weight: '100'
        },
        {
            path: '../public/fonts/Vazir-Light-FD-WOL.woff',
            weight: '300'
        },
        {
            path: '../public/fonts/Vazir-FD-WOL.woff',
            weight: '400'
        },
        {
            path: '../public/fonts/Vazir-Medium-FD-WOL.woff',
            weight: '600'
        },
        {
            path: '../public/fonts/Vazir-Bold-FD-WOL.woff',
            weight: '800'
        }
    ],
    variable: '--font-vazir'
})


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
        <body className={`${vazir.variable} font-sora font-vazir`}>
        <Layout>
            {children}
        </Layout>

        </body>
        </html>
    );
}
