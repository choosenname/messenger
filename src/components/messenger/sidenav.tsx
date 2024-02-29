"use client"

import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BellDot, LogOut, Search, Settings, User} from "lucide-react";
import {db} from "@/lib/db";
import {signOut} from "next-auth/react";

export default function SideNav() {
    // const users = await db.user.findMany();

    const onClick = () => {
        signOut();
    };

    return (
        <div>
            <div className="sticky top-0 z-50 flex flex-wrap items-center p-4 border-b border-gray-100 bg-white">
                <div className="ml-auto flex items-center justify-center gap-4 flex-wrap">
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <Search className="w-5 h-5"/>
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <BellDot className="w-5 h-5"/>
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <User className="w-5 h-5"/>
                        <span className="sr-only">Profile</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <Settings className="w-5 h-5"/>
                        <span className="sr-only">Settings</span>
                    </Button>
                    <Button onClick={onClick} className="rounded-full" size="icon" variant="ghost">
                        <LogOut className="w-5 h-5"/>
                        <span className="sr-only">Logout</span>
                    </Button>
                </div>
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
                <div className="grid gap-1 p-4">
                    {/*{users.map((user) => (*/}
                    {/*    <Link*/}
                    {/*        key={user.id}*/}
                    {/*        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"*/}
                    {/*        href="#"*/}
                    {/*    >*/}
                    {/*        <User className="w-10 h-10 border-2 border-white"/>*/}
                    {/*        <div className="grid gap-0.5">*/}
                    {/*            <p className="text-sm font-medium truncate">{user.name}</p>*/}
                    {/*            <p className="text-xs text-gray-500 dark:text-gray-400">Hey! How are you doing?</p>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*))}*/}
                </div>
            </div>
        </div>
    );
}