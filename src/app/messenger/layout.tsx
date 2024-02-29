import SideNav from "@/components/messenger/sidenav";
import React from "react";
import {auth} from "@/auth";
import {SessionProvider} from "next-auth/react";

export default async function Layout({children}: { children: React.ReactNode }) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64 overflow-auto">
                    <SideNav/>
                </div>
                <div className="flex-grow md:overflow-y-auto">
                    {children}
                </div>
            </div>
        </SessionProvider>
    );
}