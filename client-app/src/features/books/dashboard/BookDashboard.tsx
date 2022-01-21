import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { Book } from "../../../app/models/book";
import { useStore } from "../../../app/stores/store";
import BookDetails from "../details/BookDetails";
import BookList from "./BookList";

export default observer(function BookDashboard() {
    const {bookStore} = useStore();
    const {loadBooks, bookRegistry} = bookStore;

    useEffect(() => {
      if (bookRegistry.size <= 1) loadBooks();
    }, [bookRegistry.size, loadBooks])
  
    if (bookStore.loadingInitial) return <LoadingComponent content='Loading books...' />

    return (
        <Grid>
            <Grid.Column width='16'>
                <BookList />
            </Grid.Column>
        </Grid>
    )
})