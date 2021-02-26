import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Select from 'react-select';
import { logInUser } from '../actions/auth.actions'

const selectOptions = [

    { value: 'sarahedo', label: 'Sarah Edo' },
    { value: 'tylermcginnis', label: 'Tyler McGinnis' },
    { value: 'johndoe', label: 'John Doe' }
];

class Login extends Component {
    state = {
        username: ''
    }
    handleChange = (e) => {
        this.setState({ username: e.value })
    }

    handleSubmit = () => {
        const { dispatch } = this.props
        dispatch(logInUser(this.state.username))
        this.props.history.push('/')
    }
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
                            onChange={this.handleChange}
                            placeholder="Select username..."
                        />
                        <hr />
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        <hr />
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default withRouter(connect(mapStateToProps)(Login));