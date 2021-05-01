export type Value = {
	[key: string]: any;
};
export type validator = (value: any) => string | undefined;

export type Error = {
	[key: string]: string | undefined;
};

export type ValidatorResult = {
	errors: Error;
	validate: validator;
};

export type InputFieldProps = {
	key: number;
	value: any;
	fieldData: FormField;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error: undefined | string;
};

export type FormField = {
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
	options?: { value: any; label: string | number }[];
};

export type FormData = {
	fields: FormField[];
};

export type InputTemplateProps = {
	[key: string]: (props: InputFieldProps) => JSX.Element;
};

export type FormDependency = {
	fieldName: string;
	value: any;
};

export type GridInput = {
	xl?: string | number;
	md?: string | number;
	lg?: string | number;
	sm?: string | number;
	xs?: string | number;
};
