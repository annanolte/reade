import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import BookReviews from "./BookReviews";

export default observer(function BookDetails() {
    const { bookStore } = useStore();
    const { selectedBook: book, loadBook, loadingInitial } = bookStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadBook(id);
    }, [id, loadBook]);

    if (loadingInitial || !book) return <LoadingComponent />;

    return (
        <>
            <Segment>
                <Item.Group>
                    <Item key={book.id}>
                        <Item.Image
                            size="small"
                            src={book.image_url}
                        />
                        <Item.Content>
                            <Item.Header>{book.title}</Item.Header>
                            <Item.Meta>{book.authors.replace(/[\[\]']+/g, "")}</Item.Meta>
                            <Item.Description>
                                <span>{book.description}</span>
                            </Item.Description>
                            <Item.Extra>
                                <label>Published:
                                    <span> {book.publishDate}</span>
                                </label>
                                <label> Number of pages:
                                    <span> {book.pages}</span>
                                </label>
                                <label> ISBN:
                                    <span> {book.isbn}</span>
                                </label>
                                {book.isReading ? (
                                    <Button loading={bookStore.loading} onClick={bookStore.updateReading} basic color='red' content='Remove from shelf' floated="right" />
                                ) : (
                                    <Button loading={bookStore.loading} onClick={bookStore.updateReading} basic color='blue' content='Add to shelf' floated="right" />
                                )}
                                <Button as={Link} to='/books' basic color='grey' content='Go back' floated="right" />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <BookReviews bookId={book.id} />
            </Segment>
        </>
    );
})
