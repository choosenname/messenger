'use client'

import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import {signIn} from "next-auth/react"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Login() {
    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        password: ""
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signIn("credentials", {
            ...data,
            redirect: false,
        });

        router.push('/messenger');
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
                    <Input required={true}
                           type="text"
                           name="name"
                           value={data.name}
                           onChange={(e) => {setData({...data, name: e.target.value})}}
                           placeholder="Enter Username"
                           className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border
                           focus:border-black focus:bg-white focus:outline-none">
                    </Input>
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <Input required={true}
                           type="password"
                           name="password"
                           value={data.password}
                           onChange={(e) => {setData({...data, password: e.target.value})}}
                           placeholder="Enter Password"
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
