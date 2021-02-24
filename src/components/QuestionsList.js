import React, { Component } from 'react'
import QuestionsListItem from './QuestionsListItem'

class QuestionsList extends Component {
    render() {
        return (
            <div className="questions-list">
                QuestionsList component. Below is QuestionsListItem:
                <QuestionsListItem />
                <QuestionsListItem />
            </div>
        )
    }
}

export default QuestionsList;