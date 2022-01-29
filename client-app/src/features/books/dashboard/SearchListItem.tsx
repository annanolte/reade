import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { Book } from "../../../app/models/book";

interface Props {
  book: Book;
}

export default function SearchListItem({ book }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item key={book.id}>
            <Item.Content>
              <Item.Header as={Link} to={`/books/${book.id}`}>
                {book.title}
              </Item.Header>
              <Item.Meta>{book.authors.replace(/[\[\]']+/g, "")}</Item.Meta>
              <Item.Extra>
                <label>
                  {" "}
                  ISBN:
                  <span> {book.isbn}</span>
                </label>
                <Button
                  as={Link}
                  to={`/books/${book.id}`}
                  floated="right"
                  content="Details"
                  color="blue"
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}
