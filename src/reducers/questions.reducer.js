import { RECEIVE_QUESTIONS, VOTE_FOR_QUESTION, ADD_QUESTION } from '../actions/questions.actions'

export default function questions(state = [], action) {
    switch (action.type) {
        case ADD_QUESTION:
            const reducedObject = [
                ...state,
                action.newQuestion
            ]
            return reducedObject
        case RECEIVE_QUESTIONS:
            return action.questions
        case VOTE_FOR_QUESTION:
            return {
                ...state,
                [action.index]: {
                    ...state[action.index]
                } // state[action.index].[action.optionNumber].votes.concat([action.authedUser])
            }





        default:
            return state
    }
}