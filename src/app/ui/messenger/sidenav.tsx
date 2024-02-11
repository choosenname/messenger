import React from "react";
import {Avatar, AvatarImage} from "@/app/ui/avatar";
import Link from "next/link";
import {Button} from "@/app/ui/button";
import {BellDot, LogOut, Search, Settings, User} from "lucide-react";

export default function SideNav() {
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
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <LogOut className="w-5 h-5"/>
                        <span className="sr-only">Logout</span>
                    </Button>
                </div>
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
                <div className="grid gap-1 p-4">
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Alice Johnson Alice Johnson</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Hey! How are you doing?</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Alice Johnson Alice Johnson</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Hey! How are you doing?</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">Bob Smith Bob Smith Bob Smith</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Can't wait for the weekend!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                Claire Williams Claire Williams Claire Williams Claire Williams
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">New message!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                David Brown David Brown David Brown David Brown David Brown
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Let's catch up!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                Ella Lee Ella Lee Ella Lee Ella Lee Ella Lee Ella Lee
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Weekend vibes!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                Fiona Taylor Fiona Taylor Fiona Taylor Fiona Taylor Fiona Taylor
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Hello, world!</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                Grace Clark Grace Clark Grace Clark Grace Clark Grace Clark
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Testing, 1, 2, 3</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        href="#"
                    >
                        <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage alt="Avatar" src="/placeholder-user.jpg"/>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium truncate">
                                Hannah Rodriguez Hannah Rodriguez Hannah Rodriguez Hannah Rodriguez
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Ready for the day!</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}