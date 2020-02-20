import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "./styles.css";
import SideBar from "./components/Sidebar";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <div id="page-wrap">
          <h1>Welcome</h1>
          <h2>Lets make work easier</h2>
        </div>

        <nav>
          Navigation:
          <NavLink exact to="/">
            Todo list
          </NavLink>
        </nav>
        <main>
          <Switch>
            {/* <Route exact path="/" component={TodosContainer} />
          <Route exact path="/todos/:id" component={TodoDetailContainer} /> */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}
