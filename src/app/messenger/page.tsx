import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Paperclip, Send, Smile, Video} from "lucide-react";
import Image from 'next/image'


export default function Messenger() {
    return (
        <div key="1" className="flex flex-col h-screen border-t border-b border-gray-100 dark:border-gray-800">
            <div className="flex flex-1 min-h-0 overflow-hidden">
                <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center p-4 border-b h-14">
                        <Image alt="Avatar" className="w-8 h-8 translate-y-3"
                               width={32}
                               height={32}
                               src="/kitty-eat-lava-minecraft.gif"/>
                        <div className="mx-4">
                            <p className="font-semibold">Alice Johnson</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                        </div>
                        <Button className="ml-auto rounded-full" size="icon" variant="ghost">
                            <Video className="w-5 h-5"/>
                            <span className="sr-only">Video call</span>
                        </Button>
                    </div>
                    <div className="flex-1 min-h-0 overflow-auto p-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-start">
                                <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                                    <p className="text-sm">
                                        Hey, I just wanted to follow up on my previous message. I think we can make some
                                        progress if we
                                        collaborate more effectively. Let me know your thoughts!
                                    </p>
                                </div>
                                <Image alt="Avatar" className="w-8 h-8 translate-y-3 ml-auto"
                                       width={32}
                                       height={32}
                                       src="/kitty-eat-lava-minecraft.gif"/>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="rounded-lg p-3 bg-blue-500 text-white dark:bg-blue-500 dark:text-gray-900">
                                    <p className="text-sm">
                                        That sounds like a great idea! I&aposm all in for better collaboration.
                                        Let&aposs
                                        schedule a meeting for
                                        tomorrow to discuss our approach.
                                    </p>
                                </div>
                                <Image alt="Avatar" className="w-8 h-8 translate-y-3 ml-auto"
                                       width={32}
                                       height={32}
                                       src="/github-mark.png"/>
                            </div>
                            <div className="flex items-start">
                                <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                                    <img
                                        alt="Image"
                                        className="aspect-video overflow-hidden rounded-lg"
                                        height={200}
                                        width={400}
                                        src="/17074107720481mmres5o.png"
                                    />
                                </div>
                                <Image alt="Avatar" className="w-8 h-8 translate-y-3 ml-auto"
                                       width={32}
                                       height={32}
                                       src="/kitty-eat-lava-minecraft.gif"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-t h-14">
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <Smile className="w-5 h-5"/>
                            <span className="sr-only">Emojis</span>
                        </Button>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <Paperclip className="w-5 h-5"/>
                            <span className="sr-only">Attach</span>
                        </Button>
                        <Input
                            className="w-full h-10 border-0 box-border shadow-none bg-gray-100 dark:bg-gray-800"
                            id="message"
                            placeholder="Type a message..."
                        />
                        <Button className="rounded-full" size="icon">
                            <Send className="w-5 h-5"/>
                            <span className="sr-only">Send</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


interface MessageSquareIconProps {
    className: string;
}

function MessageSquareIcon(props: MessageSquareIconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15a2 2 0 1-2 2H7l-4 4V5a2 1 2-2h14a2 2z"/>
        </svg>
    )
}