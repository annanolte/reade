import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Image,
  Item,
  Label,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";

interface Props {
  book: Book;
}

export default function BookGridItem({ book }: Props) {
  return (
    <Card as={Link} to={`/books/${book.id}`} key={book.id} color='green'>
      <Image
        src={book.image_url}
        style={{ minHeight: 100, objectFit: "cover" }}
      />
      <Card.Content>
        <Card.Header weight='bold' textAlign="center">{book.title}</Card.Header>
      </Card.Content>
    </Card>
  );
}
