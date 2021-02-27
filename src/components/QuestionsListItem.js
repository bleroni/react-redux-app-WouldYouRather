import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/QuestionsListItem.css'

class QuestionsListItem extends Component {
    render() {
        return (
            <div className="questions-list-item">
                <div className="questions-list-item-header">
                    <h5>{this.props.authorName} asks...</h5>
                </div>
                <div className="questions-list-item-details">
                    <div className="questions-list-item-details-user">
                        <img src={`images/${this.props.question.author}.png`} className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="questions-list-item-details-question">
                        <h3>Would You Rather</h3>
                        <p>{this.props.question.optionOne.text}</p>
                        <Link to={`/questions/${this.props.question.id}`} >
                            <button className="btn btn-primary btn-block">View Poll</button>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsListItem