import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';

interface Props {
    books: Book[];
    selectBook: (id:string) => void;
}

export default function BookList({books, selectBook}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {books.map(book => (
                    <Item.Content key={book.id}>
                        <Item.Header as='a'>{book.title}</Item.Header>
                        <Item.Meta>{book.author}</Item.Meta>
                        <Item.Description>
                            <div>{book.description}</div>
                            <div>{book.publication_year}</div>
                            <div>{book.page_number}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => selectBook(book.id)} floated='right' content='View' color='blue' />
                            <Label basic content={book.isbn} />
                        </Item.Extra>
                    </Item.Content>
                ))}
            </Item.Group>
        </Segment>

    )
}