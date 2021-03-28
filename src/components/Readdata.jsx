import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

export class Readdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: "",
      // name: "",
      // phone: "",
      // streetAddress: "",
      details: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=39.7238866&lng=-105.1395057&radius=25&key=04269797fa598cdeed13c0d6dc3a32ce"
      )
      .then((res) => {
        this.setState({
          details: res.data.data,
        });
      });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.state.details.map((detail) => {
          return (
            <Card style={{ width: "18rem" }} key={Math.random()}>
              <Card.Img variant="top" src={detail.brewery.images.icon} />
              <Card.Body>
                <Card.Title>Brewery</Card.Title>
                <Card.Text>{detail.brewery.name}</Card.Text>
                <Card.Text>{detail.brewery.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Readdata;
