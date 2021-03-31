import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Login, Home, Register } from "./pages";
import { Container, Layout } from "./components";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Layout>
        <Container>
          <Switch>
            <Route exact path={"/"} component={Home} />
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
