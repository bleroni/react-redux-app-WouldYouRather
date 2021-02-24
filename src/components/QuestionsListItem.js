import React, { Component } from 'react'
import '../styles/QuestionsListItem.css'

class QuestionsListItem extends Component {
    render() {
        return (
            <div className="questions-list-item">
                <div className="questions-list-item-header">
                    <h5>Sarah Edo asks...</h5>
                </div>
                <div className="questions-list-item-details">
                    <div className="questions-list-item-details-user">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="questions-list-item-details-question">
                        Question details...
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsListItem