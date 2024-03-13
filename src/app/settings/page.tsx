"use client"

import React, {useState, useTransition} from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {settings} from "@/actions/settings";
import {useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {SettingsSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useCurrentUser} from "@/hooks/use-current-user";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

const SettingsPage = () => {
    const user = useCurrentUser();

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const {update} = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
        }
    });

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            settings(values)
                .then((data) => {
                    if (data.success) {
                        setError(data.error)
                    } else if (data.success) {
                        setSuccess(data.success)
                    }
                })
                .catch(() => setError("Something went wrong!"));
        })
    }

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form} >
                    <form className="space-y-6"
                          onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField name="name"
                                       control={form.control}
                                       render={({field}) => (
                                           <FormItem>
                                               <FormLabel>Name</FormLabel>
                                               <FormControl>
                                                   <Input {...field}
                                                          placeholder="John Doe"
                                                          disabled={isPending}/>
                                               </FormControl>
                                           </FormItem>
                                       )}
                            />
                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button
                            disabled={isPending}
                            type="submit">
                            Save
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;