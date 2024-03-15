import {redirect} from "next/navigation";

import {getOrCreateConversation} from "@/lib/conversation";
import {db} from "@/lib/db";
import {ChatHeader} from "@/components/chat/chat-header";
import {currentUser} from "@/lib/auth";

interface MemberIdPageProps {
    params: {
        memberId: string;
        serverId: string;
    }
}

const MemberIdPage = async ({
                                params
                            }: MemberIdPageProps) => {
    const user = await currentUser();

    if (!user) {
        return("/auth/login");
    }

    const currentMember = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            userId: user.id,
        },
        include: {
            user: true,
        },
    });

    if (!currentMember) {
        return redirect("/");
    }

    const conversation = await getOrCreateConversation(currentMember.id, params.memberId);

    if (!conversation) {
        return redirect(`/servers/${params.serverId}`);
    }

    const {memberOne, memberTwo} = conversation;

    const otherMember = memberOne.userId === user.id ? memberTwo : memberOne;
    return (
        <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
            <ChatHeader
                imageUrl={otherMember.user.imageUrl}
                name={otherMember.user.name}
                serverId={params.serverId}
                type="conversation"
            />
        </div>
    );
}