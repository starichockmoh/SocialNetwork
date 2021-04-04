export const required = (value ='') => {
    if (value) return undefined
    return 'Field is required!';
}

export const maxLengthCreator = (maxLength: number) => (value='')  => {
    if (!value) {
        return undefined
    }
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}


type ValidatorType = (value: string) => string | undefined

export type ValidatorsType = (ValidatorType)[] | null

