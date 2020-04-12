import React from "react";
import Movies from "./components/Movie";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:_id" component={MovieDetails}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" exact component={NotFound}></Route>
          <Route path="/" exact component={Movies}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </div>
  );
}

export default App;
