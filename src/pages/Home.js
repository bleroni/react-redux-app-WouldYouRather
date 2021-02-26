import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions.actions'
import QuestionsListItem from '../components/QuestionsListItem'


class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    render() {
        const { questions } = this.props;
        return (
            <div className="questions-list">
                <div className="button-container">
                    <button className="btn btn-half">Unanswered Questions</button>
                    <button className="btn btn-half-selected">Answered Questions</button>
                    {JSON.stringify(this.props.questions)}
                    {questions.map(row => {
                        return <QuestionsListItem />
                    })}

                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questions
    }
}

export default connect(mapStateToProps)(Home);