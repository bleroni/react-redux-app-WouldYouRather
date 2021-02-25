import { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/auth.actions'

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    dispatch(logOutUser())
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/dummy-link">WouldYouRather App</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/dummy-link">Home</a></li>
            <li><a href="/dummy-link">New Question</a></li>
            <li><a href="/dummy-link">Leaderboard</a></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <p className="navbar-text welcome-message">Hello, Sarah Edo</p>
            </li>
            <li><a href="/dummy-link" onClick={this.handleLogout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ questions, auth }) {
  return {
    questions,
    auth
  }
}

export default connect(mapStateToProps)(Navbar);