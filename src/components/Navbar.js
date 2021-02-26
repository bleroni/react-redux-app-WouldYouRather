import { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <Link className="navbar-brand" to="/">WouldYouRather App</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/new/question">New Question</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
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