import React, { Component } from 'react'
import '../styles/LeaderBoardItem.css'

class LeaderBoardItem extends Component {
    render() {
        return (
            <div className="leaderboard-item">
                <div className="leaderboard-item-details">
                    <div className="leaderboard-item-details-user">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="leaderboard-item-details-answers">
                        <h3>Sarah Edo </h3>
                        <p>Answered questions: 7</p>
                        <p>Created questions: 3</p>
                    </div>
                    <div className="leaderboard-item-details-score">
                        <h3>Score</h3>
                        <h2>10</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem