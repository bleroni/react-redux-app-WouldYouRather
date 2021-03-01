import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
//import QuestionNew from './QuestionNew';
import QuestionView from '../components/QuestionView'
import QuestionVote from '../components/QuestionVote'

class QuestionDetails extends Component {
    state = {
        question: {},
        allVotes: [],
        userHasVoted: false,
    }
    componentDidMount() {
        const { questions } = this.props
        const questionId = this.props.match.params.id;
        const questionArray = questions.filter(question => question.id === questionId)
        const question = questionArray[0]

        if (question) {
            const optionOneVotes = question.optionOne.votes;
            const optionTwoVotes = question.optionTwo.votes;
            const allVotes = optionOneVotes.concat(optionTwoVotes)
            this.setState({
                question,
                allVotes,
                hasVoted: allVotes.includes(this.props.auth.username) ? true : false
            })
        }





        // console.log('Index:' + index);


    }

    render() {
        const { questions } = this.props
        const questionId = this.props.match.params.id;
        const index = questions.findIndex(x => x.id === questionId);
        const questionArray = questions.filter(question => question.id === questionId)
        const question = questionArray[0]

        if (!question) {
            this.props.history.push('/404')

        }

        return (
            <div>

                {this.state.hasVoted ?
                    <QuestionView questionId={this.props.match.params.id} question={this.state.question} index={index} />
                    : <QuestionVote questionId={this.props.match.params.id} question={this.state.question} index={index} />
                }

            </div>

        )
    }
}

function mapStateToProps({ questions, auth }) {
    return {
        questions,
        auth
    }
}


export default withRouter(connect(mapStateToProps)(QuestionDetails));