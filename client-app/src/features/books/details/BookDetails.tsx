import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Book } from "../../../app/models/book";

interface Props {
    book: Book
    cancelSelectBook: () => void;
}

export default function BookDetails({ book, cancelSelectBook }: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${book.isbn}.jpg`} />
            <Card.Content>
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>
                    <span>{book.author}</span>
                </Card.Meta>
                <Card.Description>
                    {book.description}
                    {book.publication_year}
                    {book.page_number}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectBook} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    );
}
