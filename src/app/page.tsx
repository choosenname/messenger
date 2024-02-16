'use client'

import '@/app/globals.css';
import Link from "next/link";
import {LoginButton} from "@/components/auth/login-button";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex flex-col h-full my-5 mt-5 items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-10">Welcome back!</h1>
                <LoginButton>
                    <Button variant="default" size="lg">
                        Sing In
                    </Button>
                </LoginButton>
            </div>
        </main>
    );
}
