import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import BrowseDashboard from "../../features/books/browse/BrowseDashboard";
import BookDetails from "../../features/books/details/BookDetails";
import SearchDashboard from "../../features/books/search/SearchDashboard";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import TestErrors from "../../features/errors/TestError";
import HomePage from "../../features/home/HomePage";
import ProfilePage from "../../features/profiles/ProfilePage";
import ModalContainer from "../common/modals/ModalContainer";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponents";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";

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
            <Container style={{ marginTop: "7em", marginBottom: '7em' }}>
              <Switch>
                <PrivateRoute exact path="/books" component={SearchDashboard} />
                <PrivateRoute path="/books/:id" component={BookDetails} />
                <PrivateRoute path="/browse" component={BrowseDashboard} />
                <PrivateRoute path='/profile/:username' component={ProfilePage} />
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
