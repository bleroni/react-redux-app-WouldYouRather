import { Component } from 'react'

class Navbar extends Component {
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
            <li><a href="/dummy-link">Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;