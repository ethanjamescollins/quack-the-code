import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import './globals.css';
import { oxanium } from './ui/fonts';
import NavBar from './ui/navBar/NavBar';

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
            <body className={`${oxanium.className} anitaliased`}>
                <Theme>
                    <header>
                        <NavBar />
                    </header>
                    <main>{children}</main>
                </Theme>
            </body>
        </html>
    );
}
