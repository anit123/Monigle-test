import React, { Component } from "react";

export class Contact extends Component {
  render() {
    const { contactData } = this.props;

    return (
      <div>
        <div className="card">
          <h3>Name : {contactData[0]?.brewery.name}</h3>
          <h5>Short Name : {contactData[0]?.brewery.nameShortDisplay}</h5>
          <a
            href={contactData[0]?.brewery.website}
            target="_blank"
            rel="noreferrer"
          >
            Website : {contactData[0]?.brewery.website}
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
