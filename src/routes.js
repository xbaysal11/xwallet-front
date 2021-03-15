import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOption } from "./config";
import { Login } from "./pages";
import { Container, Layout } from "./components";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <Layout>
        <Container>
          <Switch>
            <Route exact path={"/"} component={Students} />
            {/* product */}
            <Route exact path={"/products"} component={Products} />
            <Route
              exact
              path={"/products/new-product"}
              component={CreateProduct}
            />
            <Route exact path={"/products/:product_id"} component={Product} />
            <Route
              exact
              path={"/products/:product_id/update"}
              component={UpdateProduct}
            />

            {/* student */}
            <Route exact path={"/students"} component={Students} />
            <Route
              exact
              path={"/students/new-student"}
              component={CreateStudent}
            />
            <Route exact path={"/students/:student_id"} component={Student} />
            <Route
              exact
              path={"/students/:student_id/update"}
              component={UpdateStudent}
            />

            {/* staff */}
            <Route exact path={"/staff"} component={Staff} />
            <Route
              exact
              path={"/staff/new-employee"}
              component={CreateEmployee}
            />
            <Route exact path={"/staff/:employee_id"} component={Employee} />
            <Route
              exact
              path={"/staff/:employee_id/update"}
              component={UpdateEmployee}
            />

            {/* categories */}
            <Route exact path={"/categories"} component={Categories} />
          </Switch>
        </Container>
      </Layout>
    );
  }
  return (
    <Switch>
      <Route path={"/"} component={Login} exact />
      <Redirect to={"/"} />
    </Switch>
  );
};
