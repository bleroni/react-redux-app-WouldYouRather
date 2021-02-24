import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { handleInitialData } from '../actions/questions.actions'
import QuestionsList from './QuestionsList'

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
                <QuestionsList />
              </div>
              <div className="col-sm-12">
                <p>
                  Other div...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(App);
