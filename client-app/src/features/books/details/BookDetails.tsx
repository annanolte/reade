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
        /*<Card fluid>
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
                    <Button as={Link} to='/books' basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>*/
        <Segment>
            <Item.Group>
                <Item key={book.id}>
                    <Item.Image
                        size="medium"
                        src={`/assets/categoryImages/${book.isbn}.jpg`}
                    />
                    <Item.Content>
                        <Item.Header as={Link} to={`/books/${book.id}`}>{book.title}</Item.Header>
                        <Item.Meta>{book.author}</Item.Meta>
                        <Item.Description>
                            <span>{book.description}</span>
                        </Item.Description>
                        <Item.Extra>
                            <label>Publication year:
                                <span> {book.publication_year}</span>
                            </label>
                            <label> Number of pages:
                                <span> {book.page_number}</span>
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
