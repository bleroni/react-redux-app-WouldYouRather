import React, { Component } from 'react'
import QuestionsListItem from './QuestionsListItem'

class QuestionsList extends Component {
    render() {
        return (
            <div>
                QuestionsList component. Below is QuestionsListItem:
                <QuestionsListItem />
            </div>
        )
    }
}

export default QuestionsList;