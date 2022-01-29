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
import LoginForm from "../../features/users/LoginForm";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ModalContainer from "../common/modals/ModalContainer";
import BookGrid from "../../features/browse/BrowseGrid";
import BookGridDashboard from "../../features/browse/BrowseDashboard";
import UserBooks from "../../features/profiles/UserBooks";
import ProfilePage from "../../features/profiles/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import BrowseDashboard from "../../features/browse/BrowseDashboard";

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
                <PrivateRoute exact path="/books" component={BookDashboard} />
                <PrivateRoute path="/books/:id" component={BookDetails} />
                <PrivateRoute path="/browse" component={BrowseDashboard} />
                <PrivateRoute path='/profiles/:username' component={ProfilePage} />
                <PrivateRoute path="/errors" component={TestErrors} />
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
