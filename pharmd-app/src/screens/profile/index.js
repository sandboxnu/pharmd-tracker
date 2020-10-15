import ProfileEdit from "./ProfileEdit";
import ProfileCreate from "./ProfileCreate";
import ProfileShow from "./ProfileShow";
import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Avatar from "../../components/Basic/Avatar";
import ProfileManage from "./ProfileManage";

const AvatarContainer = styled.div`
  ${tw`flex justify-center items-center w-24 h-24`}
`;

const AvatarIcon = () => {
    const info = JSON.parse(localStorage.getItem("userInfo"));
    let props = {};
    if (info) {
        props = {
            firstName: info.firstName, lastName: info.lastName
        }
    }

    return <AvatarContainer>
        <Avatar {...props} />
    </AvatarContainer>;
};

export default {
    list: ProfileManage,
    show: ProfileShow,
    create: ProfileCreate,
    edit: ProfileEdit,
    icon: AvatarIcon
}
