import React, { Component } from "react";
import "./app.css";
export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="starterApp">
        <div className="container">
          <h1>Starter template</h1>
          <p className="lead">
            This page packed with <b>Webpack</b>, served via <b>Express.js</b>,
            uses <b>React</b> at front-end, styled with <b>Bootstrap</b>.<br />
            For source and updates go to&nbsp;
            <a href="https://github.com/reyou/webpack4-express4-react16-bootstrap4-starter-kit">
              https://github.com/reyou/webpack4-express4-react16-bootstrap4-starter-kit
            </a>
          </p>
          <p>
            Please send PR to keep it updated with latest version of the
            packages!
          </p>
        </div>
      </div>
    );
  }
}
