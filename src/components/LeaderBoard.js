import React, { Component } from 'react'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                LeaderBoard component...
                <LeaderBoardItem />
                <LeaderBoardItem />
            </div>
        )
    }
}

export default LeaderBoard