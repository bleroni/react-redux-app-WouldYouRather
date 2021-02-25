import React, { Component } from 'react'
import Select from 'react-select';

const selectOptions = [
    { value: 'sarahedo', label: 'Sarah Edo' },
    { value: 'tylermcginnis', label: 'Tyler McGinnis' },
    { value: 'johndoe', label: 'John Doe' }
];

class Login extends Component {
    render() {
        return (
            <div className="new-question-container">
                <div className="new-question-content">
                    <h3>Login Component</h3>
                    <hr />
                    <div className="new-question-questions">
                        <h4>Welcome to the Would you rather app...</h4>
                        <p>Please sign in to continue</p>
                        <Select
                            width="200px"
                            options={selectOptions}
                        />
                        <hr />
                        <button className="btn btn-primary">Submit</button>
                        <hr />
                    </div>
                </div>

            </div>
        )
    }
}

export default Login