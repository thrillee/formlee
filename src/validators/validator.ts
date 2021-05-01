export const validateEmail = (value: string) => {
	let error;
	if (!value) {
		error = 'Please enter your email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Invalid email address';
	}
	return error;
};

export const validatePassword = (value: string) => {
	let error;
	if (!value) {
		error = 'This field is required';
	} else if (value.length < 7) {
		error = 'Password must be longer than 5 characters';
	}
	return error;
};

export const validateOTP = (value: string) => {
	let error;
	if (!value) {
		error = 'This field is required';
	} else if (value.length !== 6) {
		error = 'OTP must be 6 characters';
	}
	return error;
};

export const validatePhone = (value: string) => {
	let error;
	if (!value) {
		error = 'This field is required';
	} else if (
		!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3,5}[-\s.]?[0-9]{4,6}$/.test(value)
	) {
		error = 'Phone number is not  valid';
	}

	return error;
};

export const isInt = (n: any) => {
	return Number(n) === n && n % 1 === 0;
};

export const isFloat = (n: any) => {
	return Number(n) === n && n % 1 !== 0;
};

export const isNumeric = (n: any) => {
	const num = Number(n);
	let error;
	const valid = !isNaN(num) && (isInt(num) || isFloat(num));
	if (!valid || n === null) {
		error = 'Value must be a number';
	}
	return error;
};

export const required = (value: any) => {
	const error = 'This Field is required';
	if (!value || value.length < 1) {
		return error;
	}
	return undefined;
};

export const customLengthValidate = (value: string, length: number) => {
	const error = `This field value should not be more than ${length} characters.`;
	if (!value || value.length > length) {
		return error;
	}
	return undefined;
};

export const validateUrl = (url: string) => {
	const error = `Please enter a valid url.`;
	const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
	const regex = new RegExp(expression);
	if (!url.match(regex)) {
		return error;
	}
	return undefined;
};

export const customRegexValidate = (regex: any, value: any) => {
	let error;

	if (regex.test(value)) {
		error = 'Invalid Value. Please Enter the Correct Value.';
	}

	return error;
};

export const validity = (
	value: any,
	validator: (value: any) => string | undefined
) => {
	return (
		value !== null &&
		value !== '' &&
		value !== undefined &&
		validator &&
		validator(value) === undefined
	);
};

// export const loginFormValidation = (values) => {
//     const { email, password } = values;
//     if(email && password){

//     }
// }
