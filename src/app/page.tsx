'use client'

import '@/app/globals.css';
import {Button} from "@/app/ui/button";
import {useRouter} from "next/navigation";
import {FormEvent} from "react";
import {Input} from "@/app/ui/input";
import {sql} from "@vercel/postgres";

export default function Login() {
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // router.push('/messenger');
        try {
            await sql`INSERT INTO users (username, password) VALUES (ddd, ddd) );`;
            console.error('Seeding users:');
        } catch(error) {
            console.error('Error seeding users:', error);
        }
    }

    return (
        <div className="flex flex-col h-full my-5 mt-5 items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-10">Welcome back!</h1>
                <h2 className="mt-2 font-medium">Login to your account</h2>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username_input' className="block text-gray-700">Username</label>
                    <Input required={true} type="text" placeholder="Enter Username"
                           className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                           focus:border-black focus:bg-white focus:outline-none">
                    </Input>
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <Input required={true} type="password" placeholder="Enter Password"
                           className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                           focus:border-black focus:bg-white focus:outline-none">
                    </Input>
                </div>

                <Button type={"submit"} className='w-full h-full block bg-black hover:bg-black text-white font-semibold
                rounded-lg px-4 py-3 mt-6'>Log in</Button>
            </form>
        </div>
    );
}
