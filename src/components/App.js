import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { handleInitialData } from '../actions/questions.actions'
import QuestionsList from './QuestionsList'
import QuestionNew from './QuestionNew'
import LeaderBoard from './LeaderBoard'
import QuestionVote from './QuestionVote'
import QuestionView from './QuestionView'
import Login from './Login'


class App extends Component {
  componentDidMount() {
    console.log('handle initial data here...')
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Login />

                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <QuestionView />
                <QuestionVote />
                <LeaderBoard />
                <QuestionNew />
                <QuestionsList />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

function mapStateToProps({ questions, auth }) {
  return {
    questions,
    auth
  }
}

export default connect(mapStateToProps)(App);
