import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions.actions'
import QuestionsListItem from '../components/QuestionsListItem'


class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    render() {
        const { questions, users } = this.props;
        return (
            <div className="questions-list">
                <div className="button-container">
                    <button className="btn btn-half">Unanswered Questions</button>
                    <button className="btn btn-half-selected">Answered Questions</button>

                    {questions.map((question) => {
                        return <QuestionsListItem question={question} authorName={users[question.author].name} key={question.id} />
                    })}

                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home);