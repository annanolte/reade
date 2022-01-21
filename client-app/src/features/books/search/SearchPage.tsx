import React, { useState } from "react";
import axios from 'axios';
import { Button, Card, Divider, Form, Grid, Image, Item, Segment, TableBody } from 'semantic-ui-react';

export default function SearchPage() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState<any[]>([]);
    const [apiKey, setApiKey] = useState("AIzaSyDh7vEHPKU1Vx9mnldt-mL4qxG3FwuWtm4");
    const [visible, setVisible] = useState(false);

    function handleChange(event: { target: { value: any; }; }) {
        const book = event.target.value;
        setBook(book);
    }
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setVisible(true);
                setResult(data.data.items);
            })
    }
    return (
        <Segment.Group>
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Search: </label>
                        <input onChange={handleChange} placeholder='ex. The Da Vinci Code' />
                    </Form.Field>
                    <Button type='submit'>Search</Button>
                    {visible && <Divider horizontal >Results</Divider>}

                    <Item.Group divided>
                        {result.map(book => (
                            <Item key={book.id}>
                                <Item.Image verticalAlign='middle' src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt='No cover image' />
                                <Item.Content>
                                    <Item.Header>{book.volumeInfo.title}</Item.Header>
                                    <Item.Meta>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No information'}</Item.Meta>
                                    <Item.Description>
                                        <span>{book.volumeInfo.description ? book.volumeInfo.description: 'No information'}</span>
                                    </Item.Description>
                                    <Item.Extra>
                                        <label>Published:
                                            <span> {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'No information'}</span>
                                        </label>
                                        <label> Number of pages:
                                            <span> {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 'No information'}</span>
                                        </label>
                                        <label> ISBN:
                                            <span> {book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : 'No information'}</span>
                                        </label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))}
                    </Item.Group>
                </Form>
            </Segment>
        </Segment.Group>
    )
} 