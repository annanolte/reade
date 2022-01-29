import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import { Book } from "../../app/models/book";

interface Props {
  book: Book;
}

export default function BrowseGridItem({ book }: Props) {
  return (
    <Card as={Link} to={`/books/${book.id}`} key={book.id} color='blue' fluid={true}>
      <Image
        src={book.image_url}
        style={{ minHeight: 100, objectFit: "cover" }}
      />
      <Card.Content>
        <Card.Header weight='bold' textAlign="center" >{book.title}</Card.Header>
      </Card.Content>
    </Card>
  );
}
