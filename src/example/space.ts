namespace Validation {
    const isLetterReg = /^[A-Za-z]+$/
    export const isNUmberReg = /^[0-9]+$/
    export const checkLettrer = (text:any):boolean => {
        return isLetterReg.test(text)
    }
}