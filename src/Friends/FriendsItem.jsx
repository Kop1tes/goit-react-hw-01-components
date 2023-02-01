import { Avatar, FriendsLi, Name, Status } from "./Friends.styled";

export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsLi>
            <Status isOnline={isOnline}></Status>
            <Avatar src={ avatar } alt="User avatar" width="48" />
            <Name>{ name }</Name>
        </FriendsLi>
    )
};