import React, { Component } from "react";

export class About extends Component {
  render() {
    const { aboutData } = this.props;
    return (
      <div className="container">
        <fieldset>
          <legend>About us</legend>
          <span>{aboutData[0]?.brewery?.description}</span>
        </fieldset>
      </div>
    );
  }
}

export default About;
