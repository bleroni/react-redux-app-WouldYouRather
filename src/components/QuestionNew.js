import React, { Component } from 'react'
import '../styles/QuestionNew.css'

class NewQuestion extends Component {
    render() {
        return (
            <div className="new-question-container">
                <div className="new-question-content">
                    <h3>Create new question...</h3>
                    <hr />
                    <div className="new-question-questions">
                        <h5>Complete the question</h5>
                        <h4>Would you rather...</h4>
                        <form>
                            <div class="form-group">
                                <input type="text" className="form-control" name="optionOne" placeholder="Enter Option One text here" />
                                <h5>Or ...</h5>
                                <input type="text" className="form-control" name="optionTwo" placeholder="Enter Option Two text here" />
                                <hr />
                                <button className="btn btn-primary btn-block">Submit</button>
                                <hr />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewQuestion;