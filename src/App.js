import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import "./App.css";
import { Route } from "react-router";
import Details from "./Details";

function App() {
  const [fetcheNav, setFetcheNav] = useState();
  return (
    <div className="App">
      <Header />
      <Nav setFetcheNav={setFetcheNav} />
      {/* <Results fetcheNav={fetcheNav} /> */}
      <Route
        path="/"
        exact
        render={() => {
          return <Results fetcheNav={fetcheNav} />;
        }}
      />
      <Route path="/details" component={Details} />
    </div>
  );
}

export default App;
