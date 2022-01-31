import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import BrowseGridItem from "./BrowseGridItem";

export default observer(function BookGrid() {
  const { bookStore } = useStore();
  const { booksAdd } = bookStore;

  return (
    <Grid >
    <Grid.Column>
      <Card.Group itemsPerRow={8} doubling={true}>
      {booksAdd.map((book) => (
          <BrowseGridItem key={book.id} book={book} />
      ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
  );
});
