import React, { Component } from 'react'
import '../styles/QuestionVote.css'

class QuestionVote extends Component {
    handleOnChange = (e) => {
        alert('handling change...')
    }
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
                        <form>
                            <div className="form-check" style={{ display: 'block' }}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked onChange={this.handleOnChange} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    be a front-end developer
                        </label>
                            </div>
                            <div className="form-check" style={{ display: 'block' }}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked onChange={this.handleOnChange} />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    be a back-end developer
                        </label>
                            </div>
                        </form>
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