import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
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



function voteForQuestion(authedUser, qid, optionNumber, index) {
    return {
        type: VOTE_FOR_QUESTION,
        authedUser,
        qid,
        optionNumber,
        index
    }
}

function addQuestion(newQuestion) {
    return {
        type: ADD_QUESTION,
        newQuestion
    }
}


export function saveQuestion(question) {
    return (dispatch) => {
        // dispatch(addQuestion(question))
        return _saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question))
                console.log('Saved in the API...:' + JSON.stringify(question))
            })
            .catch((err) => {
                console.warn('There was an error: ' + err)
            })
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

export function saveQuestionVote({ authedUser, qid, optionNumber, index }) {
    return (dispatch) => {
        dispatch(voteForQuestion(authedUser, qid, optionNumber, index))
        return _saveQuestionAnswer({ authedUser, qid, answer: optionNumber })
            .then((questions) => {
                console.log('Saved in the API...')
                dispatch(getQuestions())
            })
            .catch((err) => {
                console.warn('There was an error: ' + err)
            })
    }
}