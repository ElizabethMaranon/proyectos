import React, { Component } from "react";
import loginImg from "../../assets/images/auth/login.jpg"

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-pag-paq">
        <div
          className="izq-columna"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />
        <div className="dch-columna">
          <h1>Login component goes here...</h1>
        </div>
      </div>
    );
  }
}