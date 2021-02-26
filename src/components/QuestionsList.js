import React, { Component } from 'react'
import QuestionsListItem from './QuestionsListItem'

class QuestionsList extends Component {
    render() {
        return (
            <div className="questions-list">
                <div className="button-container">
                    <button className="btn btn-half">Unanswered Questions</button>
                    <button className="btn btn-half-selected">Answered Questions</button>
                    <QuestionsListItem />
                </div>
            </div>
        )
    }
}

export default QuestionsList;