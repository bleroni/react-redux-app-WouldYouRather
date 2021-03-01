import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions.actions'
import QuestionsListItem from '../components/QuestionsListItem'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestions: 'unanswered'
        }
        // this.showUnAnsweredQuestions = this.showUnAnsweredQuestions.bind(this);
        // this.showAnsweredQuestions = this.showAnsweredQuestions.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getQuestions());
    }
    setToTrue = () => {
        this.setState({ showQuestions: "unanswered" })
    }

    setToUnTrue = () => {
        this.setState({ showQuestions: "answered" })
    }


    render() {
        const { questions, users, auth } = this.props;
        console.log('Starting render AAAAAAAAAAA: ' + JSON.stringify(questions, null, 2))
        const unansweredQuestions = Object.keys(questions).filter((key) => !questions[key].optionOne.votes.includes(auth.username) && !questions[key].optionTwo.votes.includes(auth.username))
        const answeredQuestions = Object.keys(questions).filter((key) => questions[key].optionOne.votes.includes(auth.username) || questions[key].optionTwo.votes.includes(auth.username))
        const displayedQuestions = this.state.showQuestions === 'unanswered' ? unansweredQuestions : answeredQuestions

        return (
            <div className="questions-list">


                <div className="button-container">
                    {this.state.showQuestions === 'unanswered'
                        ? <button className="btn btn-half-selected" onClick={this.setToTrue}>Unanswered Questions</button>
                        : <button className="btn btn-half" onClick={this.setToTrue}>Unanswered Questions</button>
                    }

                    {this.state.showQuestions === 'answered'
                        ? <button className="btn btn-half-selected" onClick={this.setToUnTrue}>Answered Questions</button>
                        : <button className="btn btn-half" onClick={this.setToUnTrue}>Answered Questions</button>
                    }

                    {displayedQuestions.map((key) => {
                        return <QuestionsListItem question={questions[key]} authorName={users[questions[key].author].name} key={questions[key].id} />
                    })}


                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, auth }) {
    return {
        questions,
        users,
        auth
    }
}

export default connect(mapStateToProps)(Home);