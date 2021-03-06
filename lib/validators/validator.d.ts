export declare const validateEmail: (value: string) => string | undefined;
export declare const validatePassword: (value: string) => string | undefined;
export declare const validateOTP: (value: string) => string | undefined;
export declare const validatePhone: (value: string) => string | undefined;
export declare const isInt: (n: any) => boolean;
export declare const isFloat: (n: any) => boolean;
export declare const isNumeric: (n: any) => string | undefined;
export declare const required: (value: any) => "This Field is required" | undefined;
export declare const customLengthValidate: (value: string, length: number) => string | undefined;
export declare const validateUrl: (url: string) => "Please enter a valid url." | undefined;
export declare const customRegexValidate: (regex: any, value: any) => string | undefined;
export declare const validity: (value: any, validator: (value: any) => string | undefined) => boolean;
