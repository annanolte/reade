import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Header, Item, Segment } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponents";
import { useStore } from "../../app/stores/store";
import UserBooks from "./UserBooks";

export default observer(function ProfilePage() {
    const { username } = useParams<{ username: string }>();
    const { profileStore } = useStore();
    const { loadingProfile, loadProfile, profile, setActiveTab } = profileStore;

    useEffect(() => {
        loadProfile(username);
        return () => {
            setActiveTab(0);
        }
    }, [loadProfile, username, setActiveTab])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />

    return (
        <>
            <Segment>
                <Grid>
                    <Grid.Column textAlign="center">
                        <Item.Group>
                            <Item>
                                <Item.Content verticalAlign='middle'>
                                    <Header as='h1' content='Saved Books' />
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                {profile &&
                    <>
                        <UserBooks />
                    </>}
            </Segment>
        </>
    )
})