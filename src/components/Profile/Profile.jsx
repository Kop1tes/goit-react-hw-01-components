import PropTypes from "prop-types";
import { ProfileList, Description, Avatar, Name, Quantity, Tag, Location, Stats, Stat, Label } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileList>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Stat>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </Stat>
                <Stat>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </Stat>
                <Stat>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </Stat>
            </Stats>
        </ProfileList>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};