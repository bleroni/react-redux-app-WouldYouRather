export function formatQuestion(apiQuestion) {
    const newObject = {
        id: apiQuestion.id,
        optionOne: apiQuestion.optionOne,
        optionTwo: apiQuestion.optionTwo,
        author: apiQuestion.author,
        timestamp: apiQuestion.timestamp
    }
    return newObject
}

