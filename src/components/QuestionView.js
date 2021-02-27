import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../styles/QuestionView.css'
import { FiCheck } from "react-icons/fi";


class QuestionView extends Component {
    render() {
        return (
            <div className="question-view-item">
                <div className="question-view-item-header">
                    <h5>Added by {this.props.question.author}</h5>
                </div>
                <div className="question-view-item-details">
                    <div className="question-view-item-details-user">
                        <img src={`/images/${this.props.question.author}.png`} className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="question-view-item-details-question">
                        <h3>Results</h3>
                        {this.props.question.optionOne.votes.includes(this.props.auth.username)
                            ?
                            <div className='question-view-answer-selected'>
                                <p>{this.props.question.optionOne.text}
                                    <FiCheck style={{ marginLeft: '10px' }} /></p>
                            </div>
                            :
                            <div className='question-view-answer'>
                                <p>{this.props.question.optionOne.text}</p>
                            </div>
                        }


                        <div className='question-view-answer'>
                            {this.props.question.optionTwo.votes.includes(this.props.auth.username)
                                ?
                                <div className='question-view-answer-selected'>
                                    <p>{this.props.question.optionTwo.text}
                                        <FiCheck style={{ marginLeft: '10px' }} /></p>
                                </div>
                                :
                                <div className='question-view-answer'>
                                    <p>{this.props.question.optionTwo.text}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps)(QuestionView)