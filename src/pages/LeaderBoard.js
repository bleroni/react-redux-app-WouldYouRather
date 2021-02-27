import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from '../components/LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        const { questions } = this.props;
        let stats = []

        Object.keys(this.props.users).map(userId => {
            const totalAnswers = questions.filter((question) => question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))
            console.log(totalAnswers)
            const totalQuestions = questions.filter((question) => question.author === userId)
            const totalScore = totalAnswers.length + totalQuestions.length
            const finalObj = { username: userId, answers: totalAnswers.length, questions: totalQuestions.length, totalScore }
            stats.push(finalObj);
            return ''
        })

        const sortedStats = stats.sort((a, b) => b.totalScore - a.totalScore)

        console.log(sortedStats)

        return (
            <div>
                LeaderBoard component...

                <LeaderBoardItem />
                <LeaderBoardItem />
            </div>
        )
    }
}

function mapStateToProps({ users, questions, auth }) {
    return {
        users,
        questions,
        auth
    }
}

export default connect(mapStateToProps)(LeaderBoard);