import type { Metadata } from 'next';
// TODO: add font
import { Oxanium } from 'next/font/google';
import './globals.css';

const oxanium = Oxanium({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Quack The Code',
    description: '...',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
