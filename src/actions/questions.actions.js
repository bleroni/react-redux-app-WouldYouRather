import { _getQuestions } from '../utils/_DATA'
import { formatQuestion } from '../utils/helpers'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
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