//<<<==================================== Function for validation =======================================>>>//

//===================== Checking that there is something as Input =====================//
const checkInputsPresent = (value) => { return (Object.keys(value).length > 0); }

//===================== Validating that the Input must be a non-empty String =====================//
const isValidBody = function (value) {
    if (typeof value == "number" || typeof value == "undefined" || value == null) { return false }
    if (typeof value == "string" && value.trim().length == 0) { return false }
    return true
}

const isValidName = (value) => { return (/^[A-Z a-z]+$/).test(value); }


const isValidEmail = (value) => { return (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(value)); }
const isValidpassword = (value) => { return (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(value)); }
const isValidMobileNumber = (value) => { return ((/^((\+91)?|91)?[6789][0-9]{9}$/g).test(value)); }

const isValidCity = (value) => { return (/^[A-za-z]+$/).test(value) }
const isValidPin = (value) => { return (/^[1-9][0-9]{5}$/).test(value) }












module.exports = { checkInputsPresent, isValidBody, isValidName, isValidMobileNumber, isValidEmail, isValidpassword, isValidCity, isValidPin, }