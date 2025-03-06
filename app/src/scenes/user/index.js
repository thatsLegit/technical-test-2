import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./list";
import UserView from "./view";

const UserRoutes = () => {
  return (
    <Switch>
      <Route path="/user/:id" component={UserView} />
      <Route path="/" component={User} />
    </Switch>
  );
};

export default UserRoutes;
