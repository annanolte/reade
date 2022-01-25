import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Item, Label, Segment } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";
import BookGridItem from "./BookGridItem";

export default observer(function BookGrid() {
  const { bookStore } = useStore();
  const { booksAdd } = bookStore;

  return (
    <Grid stackable columns={6}>
      {booksAdd.map((book) => (
        <Grid.Column>
          <BookGridItem key={book.id} book={book} />
        </Grid.Column>
      ))}
    </Grid>
  );
});
