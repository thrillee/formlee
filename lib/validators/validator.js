"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validity = exports.customRegexValidate = exports.validateUrl = exports.customLengthValidate = exports.required = exports.isNumeric = exports.isFloat = exports.isInt = exports.validatePhone = exports.validateOTP = exports.validatePassword = exports.validateEmail = void 0;
const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Please enter your email address';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
};
exports.validateEmail = validateEmail;
const validatePassword = (value) => {
    let error;
    if (!value) {
        error = 'This field is required';
    }
    else if (value.length < 7) {
        error = 'Password must be longer than 5 characters';
    }
    return error;
};
exports.validatePassword = validatePassword;
const validateOTP = (value) => {
    let error;
    if (!value) {
        error = 'This field is required';
    }
    else if (value.length !== 6) {
        error = 'OTP must be 6 characters';
    }
    return error;
};
exports.validateOTP = validateOTP;
const validatePhone = (value) => {
    let error;
    if (!value) {
        error = 'This field is required';
    }
    else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3,5}[-\s.]?[0-9]{4,6}$/.test(value)) {
        error = 'Phone number is not  valid';
    }
    return error;
};
exports.validatePhone = validatePhone;
const isInt = (n) => {
    return Number(n) === n && n % 1 === 0;
};
exports.isInt = isInt;
const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
};
exports.isFloat = isFloat;
const isNumeric = (n) => {
    const num = Number(n);
    let error;
    const valid = !isNaN(num) && (exports.isInt(num) || exports.isFloat(num));
    if (!valid || n === null) {
        error = 'Value must be a number';
    }
    return error;
};
exports.isNumeric = isNumeric;
const required = (value) => {
    const error = 'This Field is required';
    if (!value || value.length < 1) {
        return error;
    }
    return undefined;
};
exports.required = required;
const customLengthValidate = (value, length) => {
    const error = `This field value should not be more than ${length} characters.`;
    if (!value || value.length > length) {
        return error;
    }
    return undefined;
};
exports.customLengthValidate = customLengthValidate;
const validateUrl = (url) => {
    const error = `Please enter a valid url.`;
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);
    if (!url.match(regex)) {
        return error;
    }
    return undefined;
};
exports.validateUrl = validateUrl;
const customRegexValidate = (regex, value) => {
    let error;
    if (regex.test(value)) {
        error = 'Invalid Value. Please Enter the Correct Value.';
    }
    return error;
};
exports.customRegexValidate = customRegexValidate;
const validity = (value, validator) => {
    return (value !== null &&
        value !== '' &&
        value !== undefined &&
        validator &&
        validator(value) === undefined);
};
exports.validity = validity;
//# sourceMappingURL=validator.js.map