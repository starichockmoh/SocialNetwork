export const HelperStopSubmit = (errorMessages:Array<string>) => {
    let ErrorsNames = errorMessages.map(error => {
        let newElement = error.split('->')[1]
        if (newElement === 'MainLink)'){
            return 'mainLink'
        }
        return newElement.substring(0, newElement.length - 1).toLowerCase()
    })
    let ErrorObject:any = {}
    for (let i = 0; i < errorMessages.length; i ++){
        ErrorObject[ErrorsNames[i]] = errorMessages[i]
    }
    return ErrorObject
}