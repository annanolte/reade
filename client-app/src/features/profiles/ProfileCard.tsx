import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";


interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props) {

    return (
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Card.Content>
                <Card.Header>{profile.username}</Card.Header>
            </Card.Content>
        </Card>
    )
})