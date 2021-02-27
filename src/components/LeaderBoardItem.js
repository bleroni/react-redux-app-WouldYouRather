import React, { Component } from 'react'
import '../styles/LeaderBoardItem.css'

class LeaderBoardItem extends Component {
    render() {
        return (
            <div className="leaderboard-item">
                <div className="leaderboard-item-details">
                    <div className="leaderboard-item-details-user">
                        <img src={`/images/${this.props.leaderBoardDetails.username}.png`} className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="leaderboard-item-details-answers">
                        <h3>{this.props.leaderBoardDetails.name}</h3>
                        <p>Answered questions: {this.props.leaderBoardDetails.answers}</p>
                        <p>Created questions: {this.props.leaderBoardDetails.questions}</p>
                    </div>
                    <div className="leaderboard-item-details-score">
                        <h3>Score</h3>
                        <h2>{this.props.leaderBoardDetails.totalScore}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem