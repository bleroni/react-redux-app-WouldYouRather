import { RECEIVE_QUESTIONS, VOTE_FOR_QUESTION } from '../actions/questions.actions'

export default function questions(state = [], action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions
        case VOTE_FOR_QUESTION:
            return {
                ...state,
                state: state.map((question) => {
                    return question.qid !== action.id
                        ? question
                        : { ...question, 
                            [action.optionNumber]: action.optionNumber.concat([action.authedUser])
                        }   
                })
            }


        default:
            return state
    }
}