import React from 'react';
import {currentUser} from "@/lib/auth";
import {UserInfo} from "@/components/user-info";

const ProfilePage = async () => {
    const user = await currentUser();

    return (
        <UserInfo label="User info" user={user}/>
    );
};

export default ProfilePage;