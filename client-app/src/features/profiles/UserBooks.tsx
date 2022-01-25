import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Header, Image, Tab } from "semantic-ui-react";
import { UserBook } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";

export default observer(function ProfileActivities() {
  const { profileStore } = useStore();
  const { loadUserBooks, profile, loadingBooks, userBooks } =
    profileStore;
  useEffect(() => {
    loadUserBooks(profile!.username);
  }, [loadUserBooks, profile]);

  return (
      <Grid loading={loadingBooks}>
        <Grid.Column >
          <Card.Group itemsPerRow={8}>
            {userBooks.map((book: UserBook) => (
              <Card
                as={Link}
                to={`/books/${book.id}`}
                key={book.id}
              >
                <Image
                  src={book.image_url}
                  style={{ minHeight: 100, objectFit: "cover" }}
                />
                <Card.Content>
                  <Card.Header textAlign="center">{book.title}</Card.Header>
                  <Card.Meta textAlign="center">{book.authors.replace(/[\[\]']+/g, "")}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>

  );
});
