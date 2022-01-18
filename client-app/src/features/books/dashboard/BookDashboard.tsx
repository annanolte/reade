import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Book } from "../../../app/models/book";
import BookDetails from "../details/BookDetails";
import BookList from "./BookList";

interface Props {
    books: Book[];
    selectedBook: Book | undefined;
    selectBook: (id:string) => void;
    cancelSelectBook: () => void;
}

export default function BookDashboard({books, selectedBook, selectBook, cancelSelectBook}: Props) {
    return (
        <Grid>
            <Grid.Column width='8'>
                <BookList books={books} selectBook={selectBook}/>
            </Grid.Column>
            <Grid.Column width='8'>
                {selectedBook &&
                <BookDetails book={selectedBook} cancelSelectBook={cancelSelectBook}/>}
            </Grid.Column>
        </Grid>
    )
}