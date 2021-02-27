import React, { Component } from 'react'
import {connect} from 'react-redux'
import { generateUID } from '../utils/_DATA'
import '../styles/QuestionNew.css'

class QuestionNew extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOnChange(e) {
        //alert(e.target.name + ':::' + e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newObject = {
            id: generateUID(),
            optionOne: this.state.optionOne,
            optionTwo: this.state.optionTwo,
            author: this.props.auth.username
        }
        alert('submitting...' + JSON.stringify(newObject))
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
                                <input type="text" onChange={(e) => this.handleOnChange(e)} className="form-control" name="optionOne" placeholder="Enter Option One text here" />
                                <h5>Or ...</h5>
                                <input type="text" onChange={(e) => this.handleOnChange(e)} className="form-control" name="optionTwo" placeholder="Enter Option Two text here" />
                                <hr />
                                <button
                                    className="btn btn-primary btn-block"
                                    onClick={this.handleSubmit}
                                    disabled={this.state.optionOne.length === 0 || this.state.optionTwo.length === 0}
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

export default connect(mapStateToProps)(QuestionNew)