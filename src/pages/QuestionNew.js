import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questions.actions'
import '../styles/QuestionNew.css'

class QuestionNew extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleOnChange(e) {
        //alert(e.target.name + ':::' + e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const newObject = {
            optionOneText: this.state.optionOneText,
            optionTwoText: this.state.optionTwoText,
            author: this.props.auth.username,
            timestamp: new Date()
        }
        dispatch(saveQuestion(newObject))
        this.props.history.push('/')
    }

    render() {


        return (
            <div className="new-question-container">
                <div className="new-question-content">
                    <h3>Create new question...</h3>
                    <hr />
                    <div className="new-question-questions">
                        <h5>Complete the question</h5>
                        <h4>Would you rather...</h4>
                        <form>
                            <div className="form-group">
                                <input type="text" onChange={(e) => this.handleOnChange(e)} className="form-control" name="optionOneText" placeholder="Enter Option One text here" />
                                <h5>Or ...</h5>
                                <input type="text" onChange={(e) => this.handleOnChange(e)} className="form-control" name="optionTwoText" placeholder="Enter Option Two text here" />
                                <hr />
                                <button
                                    className="btn btn-primary btn-block"
                                    onClick={this.handleSubmit}
                                    disabled={this.state.optionOneText.length === 0 || this.state.optionTwoText.length === 0}
                                >
                                    Submit
                                </button>

                                <hr />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default withRouter(connect(mapStateToProps)(QuestionNew))