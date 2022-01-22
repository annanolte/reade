import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Icon, Image, Item, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";

export default observer(function BookDetails() {
    const { bookStore } = useStore();
    const { selectedBook: book, loadBook, loadingInitial } = bookStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadBook(id);
    }, [id, loadBook]);

    if (loadingInitial || !book) return <LoadingComponent />;

    return (
        <Segment>
            <Item.Group>
                <Item key={book.id}>
                    <Item.Image
                        size="medium"
                        src={`/assets/categoryImages/${book.isbn}.jpg`}
                    />
                    <Item.Content>
                        <Item.Header as={Link} to={`/books/${book.id}`}>{book.title}</Item.Header>
                        <Item.Meta>{book.authors}</Item.Meta>
                        <Item.Description>
                            <span>{book.description}</span>
                        </Item.Description>
                        <Item.Extra>
                            <label>Publication year:
                                <span> {book.publishedDate}</span>
                            </label>
                            <label> Number of pages:
                                <span> {book.pageCount}</span>
                            </label>
                            <label> ISBN:
                                <span> {book.isbn}</span>
                            </label>
                            <Button basic color='blue' content='Add to shelf' floated="right" />
                            <Button as={Link} to='/books' basic color='grey' content='Go back' floated="right" />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
})
