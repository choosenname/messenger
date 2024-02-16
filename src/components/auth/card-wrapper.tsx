"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import React from "react";
import {Header} from "@/components/auth/header";

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
}

export const CardWrapper = ({children, headerLabel}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}