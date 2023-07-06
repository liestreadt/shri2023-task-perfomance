export const metadata = {
    title: 'Biletopiosk',
    description: 'App to find tickets in cinemas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
