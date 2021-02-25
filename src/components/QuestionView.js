import React, { Component } from 'react';
import '../styles/QuestionView.css'

class QuestionView extends Component {
    render() {
        return (
            <div className="question-view-item">
                <div className="question-view-item-header">
                    <h5>Added by Sarah Edo</h5>
                </div>
                <div className="question-view-item-details">
                    <div className="question-view-item-details-user">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="question-view-item-details-question">
                        <h3>Results</h3>
                        <div className='question-view-answer-selected'>
                            <p>be a front-end developer</p>
                        </div>
                        <div className='question-view-answer'>
                            <p>be a back-end developer</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionView