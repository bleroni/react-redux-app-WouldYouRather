import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from '../components/LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        const { questions, users } = this.props;
        let stats = []

        Object.keys(this.props.users).map(userId => {
            const totalAnswers = questions.filter((question) => question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))
            console.log(totalAnswers)
            const totalQuestions = questions.filter((question) => question.author === userId)
            const totalScore = totalAnswers.length + totalQuestions.length
            const finalObj = { username: userId, answers: totalAnswers.length, questions: totalQuestions.length, totalScore, name: users[userId].name }
            stats.push(finalObj);
            return ''
        })

        const sortedStats = stats.sort((a, b) => b.totalScore - a.totalScore)

        console.log(sortedStats)

        return (
            <div>
                {sortedStats.map(userStats => {
                    return <LeaderBoardItem leaderBoardDetails={userStats} />
                })}


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