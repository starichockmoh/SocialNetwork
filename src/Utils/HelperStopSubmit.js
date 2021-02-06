export const HelperStopSubmit = (errorMessages) => {
    let ErrorsNames = errorMessages.map(error => {
        let newElement = error.split('->')[1]
        return newElement.substring(0, newElement.length - 1).toLowerCase()
    })
    let ErrorObject = {}
    for (let i = 0; i < errorMessages.length; i ++){
        ErrorObject[ErrorsNames[i]] = errorMessages[i]
    }
    return ErrorObject
}