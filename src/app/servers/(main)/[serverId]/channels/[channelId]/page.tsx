import {redirect} from "next/navigation";
import {db} from "@/lib/db";
import {currentUser} from "@/lib/auth";
import {ChatHeader} from "@/components/chat/chat-header";

interface ChannelIdPageProps {
    params: {
        serverId: string;
        channelId: string;
    }
}

const ChannelIdPage = async ({
                                 params
                             }: ChannelIdPageProps) => {
    const user = await currentUser();

    if (!user) {
        return("/auth/login");
    }

    const channel = await db.channel.findUnique({
        where: {
            id: params.channelId,
        },
    });

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            userId: user.id,
        }
    });

    if (!channel || !member) {
        redirect("/");
    }
    return (
        <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
        <ChatHeader
            name={channel.name}
            serverId={channel.serverId}
            type="channel"
        />
    </div>
);
}

export default ChannelIdPage;