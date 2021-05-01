/// <reference types="react" />
export declare type Value = {
    [key: string]: any;
};
export declare type validator = (value: any) => string | undefined;
export declare type Error = {
    [key: string]: string | undefined;
};
export declare type ValidatorResult = {
    errors: Error;
    validate: validator;
};
export declare type InputFieldProps = {
    key: number;
    value: any;
    fieldData: FormField;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: undefined | string;
};
export declare type FormField = {
    name: string;
    type: string;
    label: string;
    grid?: GridInput;
    helperText: string;
    defaultValue?: any;
    placeholder: string;
    notEditable?: boolean;
    validation?: validator;
    dependent?: FormDependency;
    isCustomValidation?: boolean;
    options?: {
        value: any;
        label: string | number;
    }[];
};
export declare type FormData = {
    fields: FormField[];
};
export declare type InputTemplateProps = {
    [key: string]: (props: InputFieldProps) => JSX.Element;
};
export declare type FormDependency = {
    fieldName: string;
    value: any;
};
export declare type GridInput = {
    xl?: string | number;
    md?: string | number;
    lg?: string | number;
    sm?: string | number;
    xs?: string | number;
};
