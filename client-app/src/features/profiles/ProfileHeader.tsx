import { observer } from "mobx-react-lite"
import { Grid, Header, Item, Segment } from "semantic-ui-react"
import { Profile } from "../../app/models/profile"

interface Props {
    profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props) {
    return (
        <Segment>
            <Grid>
                <Grid.Column textAlign="center">
                    <Item.Group>
                        <Item>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content='My Books' />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
            </Grid>
        </Segment>
    )
})