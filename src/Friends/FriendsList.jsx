import PropTypes from "prop-types";
import { FriendsItem } from "./FriendsItem";
import { FriendsUl } from "./Friends.styled";

export const FriendsList = ({ friends }) => {
    return (
        <FriendsUl>
            {friends.map(({ id, name, isOnline, avatar }) => {
                return <FriendsItem
                    key={id}
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar} />
            })}
        </FriendsUl>      
    );
};

FriendsList.propTypes = {
    friends: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};