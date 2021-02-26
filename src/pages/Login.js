import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Select from 'react-select';
import { logInUser } from '../actions/auth.actions'
import { getUsers } from '../actions/users.actions'

class Login extends Component {
    state = {
        username: ''
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getUsers());
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
        const apiUsers = this.props.users;
        const selectUsers = Object.keys(apiUsers).map((key) => {
            return { value: apiUsers[key].id, label: apiUsers[key].name }
        })
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
                            options={selectUsers}
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

function mapStateToProps({ auth, users }) {
    return {
        auth,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login));