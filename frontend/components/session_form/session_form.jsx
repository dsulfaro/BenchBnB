import React from 'react';
import { login } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  printErrors() {
    return (
      <ul>
        {this.props.errors.map( (e, i) => <li key={i}>{e}</li>)}
      </ul>
    );
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === "login"){
      return <Link to="/signup">Signup</Link>;
    }
    else {
      return <Link to="/login">Login</Link>;
    }
  }

  getHeader() {
    return <b>{this.props.formType.charAt(0).toUpperCase() + this.props.formType.slice(1)}</b>;
  }

  render() {
    let that = this;
    return (
      <div id="session-form-container">
        Please {this.getHeader()} or {this.navLink()}
        <br />
        {this.printErrors()}
        <br />
        <form>
          <input type="text"
            placeholder="Username"
            onChange={this.update("username")}
            value={this.state.username} />
          <br />
          <input type="password"
            placeholder="Password"
            onChange={this.update("password")}
            value={this.state.password} />
          <br />
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
