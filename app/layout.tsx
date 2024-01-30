import type { Metadata } from 'next';
// TODO: add font
import { Oxanium } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

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
