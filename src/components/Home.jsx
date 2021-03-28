import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

export class Home extends Component {
  render() {
    const { homeData } = this.props;
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Sort</Form.Label>
              <Form.Control as="select" onChange={this.props.onSort}>
                <option value={"name"}>Sort By name</option>
                <option value={"locality"}>Sort By Locality</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group>
              <Form.Label>Filter Data</Form.Label>
              <Form.Control
                type="text"
                placeholder="search"
                name="filter"
                value={this.props.filter}
                onChange={this.props.onHandleFilter}
              ></Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          {homeData.map((content) => {
            return (
              <div className="col-md-4 mt-3">
                <Card className="w-100 h-100">
                  <Card.Body>
                    <Card.Title>{content?.name}</Card.Title>
                    <p>
                      Address : {content?.streetAddress},{content?.locality}
                    </p>
                    <p>
                      {content?.region},{content?.postalCode}
                    </p>
                    <p>{content?.locationType}</p>
                    <p>{content?.phone}</p>
                    <a href={content?.website} target="_blank" rel="noreferrer">
                      {content?.website}
                    </a>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
