import React, { Component } from 'react'
import '../styles/QuestionVote.css'

class QuestionVote extends Component {
    render() {
        return (
            <div className="question-vote">
                <div className="question-vote-details">
                    <div className="question-vote-details-user">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" className="thumbnail" alt="thumbnail" />
                    </div>
                    <div className="question-vote-details-question">
                        <h3>Would You Rather...</h3>
                        <hr />

                        <div className="form-check" style={{ display: 'block' }}>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                be a front-end developer
                        </label>
                        </div>
                        <div className="form-check" style={{ display: 'block' }}>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked />
                            <label class="form-check-label" for="exampleRadios2">
                                be a back-end developer
                        </label>
                        </div>
                        <hr />
                        <button className="btn btn-primary btn-block">Submit</button>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionVote