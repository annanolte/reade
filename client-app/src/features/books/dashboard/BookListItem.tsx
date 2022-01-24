import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment, SegmentGroup } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";

interface Props {
    book: Book;
}

export default function BookListItem({ book }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item key={book.id}>
                        <Item.Image
                            src={book.image_url}
                        />
                        <Item.Content>
                            <Item.Header as={Link} to={`/books/${book.id}`}>{book.title}</Item.Header>
                            <Item.Meta>{book.authors.replace(/[\[\]']+/g, "")}</Item.Meta>
                            <Item.Description>
                                <span>{book.description}</span>
                            </Item.Description>
                            <Item.Extra>
                                <label>Publication year:
                                    <span> {book.publishDate}</span>
                                </label>
                                <label> Number of pages:
                                    <span> {book.pages}</span>
                                </label>
                                <label> ISBN:
                                    <span> {book.isbn}</span>
                                </label>
                                <Button
                                    as={Link}
                                    to={`/books/${book.id}`}
                                    floated="right"
                                    content="View"
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
