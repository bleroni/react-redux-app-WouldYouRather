import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { handleInitialData } from '../actions/questions.actions'
import QuestionsList from './QuestionsList'

class App extends Component {
  componentDidMount() {
    console.log('handle initial data here...')
    handleInitialData();
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <QuestionsList />
                {JSON.stringify(this.props)}
              </div>
              <div className="col-sm-4">
                <h3>Column 2</h3>
                <p>Lorem ipsum dolor..</p>
              </div>
              <div className="col-sm-4">
                <h3>Column 3</h3>
                <p>Lorem ipsum dolor..</p>
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
