import React from 'react';
import {CardWrapper} from "@/components/auth/card-wrapper";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const ErrorCard = () => {
    return (
        <CardWrapper headerLabel={"Something went wrong!"}>
            <div className={"w-full flex justify-center items-center"}>
                <ExclamationTriangleIcon className={"text-destructive"}/>
            </div>
            <Button variant={"link"}>
                <Link href={"/auth/login"}>
                    Back to login
                </Link>
            </Button>
        </CardWrapper>
    );
};

export default ErrorCard;