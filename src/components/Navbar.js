import { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/auth.actions'

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(logOutUser());
    this.props.history.push('/')
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">WouldYouRather App</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><NavLink to="/" activeClassName="active-nav-link">Home</NavLink></li>
            <li><NavLink to="/new/question" activeClassName="active-nav-link">New Question</NavLink></li>
            <li><NavLink to="/leaderboard" activeClassName="active-nav-link">Leaderboard</NavLink></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <p className="navbar-text welcome-message">Hello, {this.props.auth.name}</p>
            </li>
            <li><Link to="/bleron" onClick={this.handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ questions, auth, users }) {
  return {
    questions,
    auth,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));