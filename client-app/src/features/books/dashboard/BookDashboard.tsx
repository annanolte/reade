import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Form, Grid, GridColumn, Header, List, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";
import BookDetails from "../details/BookDetails";
import BookList from "./BookList";
import TitleListItem from "./TitleListItem";

export default observer(function BookDashboard() {
  const { bookStore } = useStore();
  const { loadBooks, bookRegistry } = bookStore;
  const [query, setQuery] = useState("");
  const { booksAdd } = bookStore;

  useEffect(() => {
    if (bookRegistry.size <= 1) loadBooks();
  }, [bookRegistry.size, loadBooks]);

  if (bookStore.loadingInitial)
    return <LoadingComponent content="Loading books..." />;

  return (
    <>
    <Segment>
        <Form>
        <Header >Search:</Header>
          <Form.Field>
            <input
              placeholder="Enter a book title, author or ISBN"
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form.Field>
        </Form>
      </Segment>
<Grid>
      <Grid.Column width="16">
        {booksAdd
          .filter((book) => {
            if (query === "") {
              return book;
            } else if (book.title.toLowerCase().includes(query.toLowerCase()) || book.authors.toLowerCase().includes(query.toLowerCase()) || book.isbn.toLowerCase().includes(query.toLowerCase())) {
              return book;
            }
          })
          .map((book) => (
            <TitleListItem key={book.id} book={book} />
          ))}
      </Grid.Column>
    </Grid>
    </>
      
  );
});
