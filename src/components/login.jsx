import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div className="col center">
          <div class="row justify-content-center">
            <form>
              <div className="form-group">
                <label for="InputUsername">Brukernavn</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="InputUsername"
                  placeholder="Brukernavn"
                ></input>
              </div>

              <div className="form-group">
                <label for="InputPassword">Passord</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="InputPassword"
                  placeholder="Passord"
                ></input>
              </div>

              <button type="submit" class="btn btn-primary">
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
