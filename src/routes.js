import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
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
  CreateMoneyOperation,
  UpdateMoneyOperation,
} from "./pages";
import { Container, Layout } from "./components";
import { PlusIcon } from "./components/icons";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Layout>
        {/* <Sidebar /> */}

        <Container>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route
              exact
              path={"/money-operations/create-money-operation"}
              component={CreateMoneyOperation}
            />
            <Route
              exact
              path={"/money-operations/:id"}
              component={UpdateMoneyOperation}
            />
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
            <Redirect to={"/"} />
          </Switch>
        </Container>
        <div className="floating-button">
          <Link to="/money-operations/create-money-operation">
            <div className="money_operation to-create">
              <PlusIcon />
            </div>
          </Link>
        </div>
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
