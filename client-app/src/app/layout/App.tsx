import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Header, List } from "semantic-ui-react";
import { Book } from "../models/book";
import NavBar from "./NavBar";
import BookDashboard from "../../features/books/dashboard/BookDashboard";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import BookDetails from "../../features/books/details/BookDetails";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/books" component={BookDashboard} />
              <Route path="/books/:id" component={BookDetails} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
