import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Item, Label, Segment } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";
import BookGridItem from "./BookGridItem";

export default observer(function BookGrid() {
  const { bookStore } = useStore();
  const { booksAdd } = bookStore;

  return (
    <Grid >
    <Grid.Column width={16}>
      <Card.Group itemsPerRow={8}>
      {booksAdd.map((book) => (
          <BookGridItem key={book.id} book={book} />
      ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
  );
});
