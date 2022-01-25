import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment, SegmentGroup } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";

interface Props {
  book: Book;
}

export default function BookGridItem({ book }: Props) {
  return (
    <Item key={book.id}>
      <Item.Image
        as={Link}
        to={`/books/${book.id}`}
        size="small"
        src={book.image_url}
      />
    </Item>
  );
}
