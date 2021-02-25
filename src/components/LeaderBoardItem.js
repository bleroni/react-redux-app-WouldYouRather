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
                        <h3>Question details...</h3>
                        <p>Question Option One text...</p>
                        <button className="btn btn-primary btn-block">View Poll</button>
                    </div>
                    <div className="leaderboard-item-details-score">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="thumbnail" alt="thumbnail" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem