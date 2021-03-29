import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      filterData: [],
      filter: "",
    };
  }

  handleSort = (e) => {
    if (e.target.value === "name") {
      const sortByName = this.state.details.sort(function (a, b) {
        return (
          a.name.charCodeAt(a.length - 1) - b.name.charCodeAt(b.length - 1)
        );
      });
      this.setState({
        details: sortByName,
      });
    } else if (e.target.value === "locality") {
      const sortByLocality = this.state.details.sort(function (a, b) {
        return (
          a.locality.charCodeAt(a.length - 1) -
          b.locality.charCodeAt(b.length - 1)
        );
      });
      this.setState({
        details: sortByLocality,
      });
    }
  };

  handleFilter = (e) => {
    const filterValue = this.state.filterData.filter((filterItem) => {
      return filterItem.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    this.setState({
      filter: e.target.value,
      details: filterValue,
    });
  };

  componentDidMount() {
    axios
      .get(
        "https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=39.7238866&lng=-105.1395057&radius=25&key=04269797fa598cdeed13c0d6dc3a32ce"
      )
      .then((res) => {
        console.log(res);
        this.setState({
          details: res.data.data,
          filterData: res.data.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar navData={this.state.details} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  homeData={this.state.details}
                  onSort={this.handleSort}
                  onHandleFilter={this.handleFilter}
                  filter={this.state.filter}
                />
              )}
            />

            <Route
              path="/about"
              render={(props) => (
                <About {...props} aboutData={this.state.details} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} contactData={this.state.details} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
