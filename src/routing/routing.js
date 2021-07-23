import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Task from "../pages/task";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Task} />
        <Route path="/task" component={Task} />
      </Switch>
    </Router>
  );
}
