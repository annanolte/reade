import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import BrowseGrid from "./BrowseGrid";

export default observer(function BookGridDashboard() {
    const { bookStore } = useStore();
    const { loadBooks, bookRegistry } = bookStore;

    useEffect(() => {
        if (bookRegistry.size <= 1) loadBooks();
    }, [bookRegistry.size, loadBooks])

    if (bookStore.loadingInitial) return <LoadingComponent content='Loading books...' />

    return (
        <Grid>
            <Grid.Column width='16'>
                <BrowseGrid />
            </Grid.Column>
        </Grid>
    )
})