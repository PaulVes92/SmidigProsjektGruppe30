import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col center">
          <div className="row justify-content-center">
            <form>
              <div className="form-group">
                <label htmlFor="InputUsername">Brukernavn</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="InputUsername"
                  placeholder="Brukernavn"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="InputPassword">Passord</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="InputPassword"
                  placeholder="Passord"
                ></input>
              </div>

              <button type="submit" className="btn btn-primary">
                Logg inn
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
