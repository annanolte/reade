import { observer } from 'mobx-react-lite';
import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import SearchListItem from './SearchListItem';

export default observer(function SearchList() {
    
    const {bookStore} = useStore();
    const {booksAdd} = bookStore;
    
    return (
        <Segment>
            <Item.Group divided>
                {booksAdd.map(book => (
                    <SearchListItem key={book.id} book={book} />
                ))}
            </Item.Group>
        </Segment>

    )
})