import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      errorMsg: null,
    };
  }

  onUserIdChange = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  doLogin = async () => {
    const { userId, password } = this.setState;

    const url = "/login";

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
    }

    if (response.status === 401) {
      this.setState({ errorMsg: "invalid userId/password" });
      return;
    }

    if (response.status !== 204) {
      this.setState({
        errorMsg:
          "Error when connecting to server: status code " + response.status,
      });
      return;
    }

    this.setState({ errorMsg: null });
    this.props.updateLoggedInUserId(userId);
    this.props.history.push("/");
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
    return (
      <div>
        <div className="loginArea">
          <h2>Innlogging</h2>
          <form>
            <input
              id="email"
              type="text"
              name="userId"
              placeholder="Username"
              value={this.state.userId}
              onChange={this.onUserIdChange}
            />

            <input
              className="mt-3"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <div>
              {error}

              <div
                className="btn btn-primary btn-sm mt-2"
                onClick={this.doLogin}
              >
                Logg Inn
              </div>
            </div>
            <Link className="btn btn-primary btn-sm mt-2" to="/signUp">
              Register
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
