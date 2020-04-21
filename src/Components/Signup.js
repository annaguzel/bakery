import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../store/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user) return <Redirect to="/" />;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-warning">
                Signup
              </button>
              <Link
                style={{ color: "#ffc107" }}
                to="/login"
                className="btn btn-link my-2 my-sm-0"
              >
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  signup: (userData) => dispatch(signup(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
