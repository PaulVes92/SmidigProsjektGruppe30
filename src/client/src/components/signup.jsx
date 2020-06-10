import React from "react";
import { withRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      confirm: "",
      errorMsg: null,
    };
  }

  onUserIdChange = (event) => {
    this.setState({ userId: event.target.value, errorMsg: null });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, errorMsg: null });
  };

  onConfirmChange = (event) => {
    this.setState({ confirm: event.target.value, errorMsg: null });
  };

  doSignUp = async () => {
    const { userId, password, confirm } = this.state;

    if (confirm !== password) {
      this.setState({ errorMsg: "Passwords do not match" });
      return;
    }

    const url = "http://localhost:8080/users";

    const payload = { userId: userId, password: password };

    let response;

    try {
      response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      this.setState({ errorMsg: "Failed to connect to server: " + err });
      return;
    }

    if (response.status === 400) {
      this.setState({ errorMsg: "Invalid userId/password" });
      return;
    }

    if (response.status !== 201) {
      this.setState({
        errorMsg:
          "Error when connecting to server: status code " + response.status,
      });
      return;
    }

    this.setState({ errorMsg: null });
    this.props.updateLoggedInUserId(userId);
    this.props.history.push("/customers");
  };

  render() {
    let error = <div />;
    if (this.state.errorMsg) {
      error = (
        <div className="errorMsg">
          <p>{this.state.errorMsg}</p>
        </div>
      );
    }

    let confirmMsg = "Ok";
    if (this.state.confirm !== this.state.password) {
      confirmMsg = "Not matching";
    }

    return (
      <div>
        <div className="signupArea">
          <h2>Registrering</h2>
          <div>
            <input
              className="mt-3"
              type="text"
              placeholder="Username"
              value={this.state.userId}
              onChange={this.onUserIdChange}
            />
          </div>
          <div>
            <input
              className="mt-3"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div>
            <input
              className="mt-3"
              type="password"
              placeholder="Type password again"
              value={this.state.confirm}
              onChange={this.onConfirmChange}
            />
            <div className="mt-3">{confirmMsg}</div>
          </div>
          {error}
          <Link
            className="btn btn-primary mt-3"
            onClick={this.doSignUp}
            to="/login"
          >
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
