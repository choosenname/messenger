import '@/app/globals.css';
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import React from "react";
import {Toaster} from "@/components/ui/sonner";
import {cn} from "@/lib/utils";
import {Open_Sans} from "next/font/google";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {ModalProvider} from "@/components/providers/modal-provider";
import {SocketProvider} from "@/components/providers/socket-provider";

const font = Open_Sans({subsets: ['latin']})

export const metadata = {
    title: 'OneTeam',
    description: 'Generated by Next.js',
}

export default async function RootLayout({children}:
                                             { children: React.ReactNode }) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <html lang="en" suppressHydrationWarning>
            <body className={cn(
                font.className,
                "bg-white dark:bg-[#313338]"
            )}>
            <Toaster/>
            <ThemeProvider
                attribute="class"
                defaultTheme="ligth"
                enableSystem={true}
                storageKey="discord-theme"
            >
                <SocketProvider>
                    <ModalProvider />
                    {children}
                </SocketProvider>
            </ThemeProvider>
            </body>
            </html>
        </SessionProvider>
    )
}
