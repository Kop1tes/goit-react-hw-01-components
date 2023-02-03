import PropTypes from "prop-types";
import { ProfileList, Description, Avatar, Name, Quantity, Tag, Location, Stats, Stat, Label } from "./Profile.styled";


export const Profile = ({ username, tag, location, avatar, stats }) => {
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
                    <Quantity>{stats.followers}</Quantity>
                </Stat>
                <Stat>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </Stat>
                <Stat>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
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
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }).isRequired, 
};