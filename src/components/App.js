import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar'
import { getQuestions } from '../actions/questions.actions'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home'
import QuestionNew from '../pages/QuestionNew'
import LeaderBoard from '../pages/LeaderBoard'
import QuestionVote from './QuestionVote'
import Login from '../pages/Login'
import QuestionDetails from '../pages/QuestionDetails'


class App extends Component {
  componentDidMount() {
    console.log('handle initial data here...')
    this.props.dispatch(getQuestions());
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <div className="container">
            {this.props.auth.username.length > 0 &&
              <Navbar />
            }

            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <Switch>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <ProtectedRoute exact path='/' component={Home} auth={this.props.auth} />
                    <ProtectedRoute path='/question' component={QuestionVote} auth={this.props.auth} />
                    <ProtectedRoute path='/new/question' component={QuestionNew} auth={this.props.auth} />
                    <ProtectedRoute path='/leaderboard' component={LeaderBoard} auth={this.props.auth} />
                    <ProtectedRoute path='/questions/:id' component={QuestionDetails} auth={this.props.auth} />
                  </Switch>


                </div>
              </div>
            </div>
          </div>
        </div >
      </Router>
    );
  }
}

function mapStateToProps({ users, questions, auth }) {
  return {
    users,
    questions,
    auth
  }
}

export default connect(mapStateToProps)(App);
