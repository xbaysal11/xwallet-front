import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Login,
  Home,
  Register,
  Wallets,
  Categories,
  CreateCategory,
  UpdateCategory,
  CreateWallet,
  UpdateWallet,
} from "./pages";
import { Container, Layout } from "./components";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Layout>
        <Container>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/wallets"} component={Wallets} />
            <Route
              exact
              path={"/wallets/create-wallet"}
              component={CreateWallet}
            />
            <Route exact path={"/wallets/:id"} component={UpdateWallet} />
            <Route exact path={"/categories"} component={Categories} />
            <Route
              exact
              path={"/categories/create-category"}
              component={CreateCategory}
            />
            <Route exact path={"/categories/:id"} component={UpdateCategory} />
          </Switch>
        </Container>
      </Layout>
    );
  }
  return (
    <Switch>
      <Route path={"/login"} component={Login} exact />
      <Route path={"/register"} component={Register} exact />
      <Redirect to={"/login"} />
    </Switch>
  );
};
