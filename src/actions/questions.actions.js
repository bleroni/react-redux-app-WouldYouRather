import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { formatQuestion } from '../utils/helpers'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_FOR_QUESTION = 'VOTE_FOR_QUESTION'


function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function voteForQuestion(authedUser, qid, optionNumber) {
    return {
        type: VOTE_FOR_QUESTION,
        authedUser,
        qid,
        optionNumber
    }
}

export function getQuestions() {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                const keys = Object.keys(questions)
                const formattedQuestions = keys.map((key) => formatQuestion(questions[key]))
                dispatch(receiveQuestions(formattedQuestions))
            })
            .catch((err) => {
                console.warn('There was an error: ' + err)
            })
    }
}

export function saveQuestionVote({ authedUser, qid, optionNumber }) {
    return (dispatch) => {
        dispatch(voteForQuestion(authedUser, qid, optionNumber))
        console.log(authedUser, qid, optionNumber)
        return _saveQuestionAnswer({ authedUser, qid, answer: optionNumber })
            .then((questions) => {
                console.log('Saved in the API...')
            })
            .catch((err) => {
                console.warn('There was an error: ' + err)
            })
    }
}