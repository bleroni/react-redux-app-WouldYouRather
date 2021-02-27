import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveQuestionVote } from '../actions/questions.actions'
import '../styles/QuestionVote.css'

class QuestionVote extends Component {
    state = {
        optionNumber: '',
        questionId: this.props.questionId
    }
    handleOnChange = (e) => {
        // alert('handling change...' + e.target.value)
        this.setState({ optionNumber: e.target.value })
    }

    handleSubmit = () => {
        const { dispatch } = this.props;
        if (this.state.optionNumber.length === 0) {
            alert('Please choose an option')
        }
        dispatch(saveQuestionVote({ authedUser: this.props.auth.username, qid: this.props.questionId, optionNumber: this.state.optionNumber }))
        //alert('Selected option is: ' + this.state.optionNumber + '. questionId=' + this.props.questionId + '. User is:' + this.props.auth.username)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="question-vote">
                <div className="question-view-item-header">
                    <h5>Added by {this.props.users[this.props.question.author] && this.props.users[this.props.question.author].name}</h5>
                </div>
                <div className="question-vote-details">
                    <div className="question-vote-details-user">
                        {this.props.question.author &&
                            <img src={`/images/${this.props.question.author}.png`} className="thumbnail" alt="thumbnail" />
                        }

                    </div>
                    <div className="question-vote-details-question">
                        <h3>Would You Rather...</h3>
                        <hr />
                        <form>
                            <div className="form-check" style={{ display: 'block' }}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="optionOne" onChange={this.handleOnChange} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    {this.props.question.optionOne && this.props.question.optionOne.text}
                                </label>
                            </div>
                            <div className="form-check" style={{ display: 'block' }}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="optionTwo" onChange={this.handleOnChange} />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    {this.props.question.optionTwo && this.props.question.optionTwo.text}
                                </label>
                            </div>
                        </form>
                        <hr />
                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                        <hr />
                    </div>
                </div>
            </div>
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

export default withRouter(connect(mapStateToProps)(QuestionVote))