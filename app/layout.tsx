import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import NavBar from './ui/navBar/NavBar';
import './globals.css';
import { oxanium } from './ui/fonts';

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
        <html lang="en" className={oxanium.className}>
            <body>
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
