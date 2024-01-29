import type { Metadata } from 'next';
// TODO: add font
import { Oxanium } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';
import { Theme, ThemePanel } from '@radix-ui/themes';

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
            <body>
                <Theme>
                    <header>
                        <NavBar />
                    </header>
                    <main className="flex min-h-screen flex-col items-center justify-between p-5">
                        {children}
                    </main>
                </Theme>
            </body>
        </html>
    );
}
