import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Header, List } from "semantic-ui-react";
import { Book } from "../models/book";
import NavBar from "./NavBar";
import BookDashboard from "../../features/books/dashboard/BookDashboard";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import BookDetails from "../../features/books/details/BookDetails";
import SearchPage from "../../features/books/search/SearchPage";
import LoginForm from "../../features/users/LoginForm";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ModalContainer from "../common/modals/ModalContainer";
import BookGrid from "../../features/books/dashboard/BookGrid";
import BookGridDashboard from "../../features/books/dashboard/BookGridDashboard";
import Search from "../../features/books/dashboard/trash/Search";
import SearchPg from "../../features/books/dashboard/trash/SearchPg";
import SrcPg from "../../features/books/dashboard/trash/SrcPg";

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded)
    return <LoadingComponent content="Loading app..." />;

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path="/books" component={BookDashboard} />
                <Route path="/books/:id" component={BookDetails} />
                <Route path="/grid" component={BookGridDashboard} />
                <Route path="/login" component={LoginForm} />
                <Route path="/errors" component={TestErrors} />
                <Route path="/server-error" component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
