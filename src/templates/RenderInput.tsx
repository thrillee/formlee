import * as React from 'react';
import {
	Value,
	Error,
	FormData,
	InputTemplateProps,
} from '../configs/formConfigs';
import { InputFieldProps } from '../configs/formConfigs';
import { dependenciesIsnotValid } from '../configs/utils';

interface FormProp {
	formData: FormData;
	values: Value;
	errors: Error;
	validate: () => true | undefined;
	inputTemplates: InputTemplateProps;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RenderInput: React.FC<FormProp> = ({
	inputTemplates,
	handleChange,
	formData,
	values,
	errors,
}) => {
	const getInputTemplate = (props: InputFieldProps) => {
		return inputTemplates[props.fieldData.type](props);
	};

	return (
		<>
			{formData.fields.map((data, key) => {
				if (
					data.dependent &&
					dependenciesIsnotValid(
						values[data.dependent.fieldName],
						data.dependent.value
					)
				) {
					return null;
				}
				return getInputTemplate({
					key,
					onChange: handleChange,
					value: data.notEditable ? data.defaultValue : values[data.name],
					error: errors[data.name],
					fieldData: data,
				});
			})}
		</>
	);
};

export default RenderInput;
