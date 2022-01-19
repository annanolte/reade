import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Book } from '../../../app/models/book';
import { useStore } from '../../../app/stores/store';
import BookListItem from './BookListItem';

export default observer(function BookList() {
    
    const {bookStore} = useStore();
    const {booksAdd} = bookStore;
    
    return (
        <Segment>
            <Item.Group divided>
                {booksAdd.map(book => (
                    <BookListItem key={book.id} book={book} />
                ))}
            </Item.Group>
        </Segment>

    )
})