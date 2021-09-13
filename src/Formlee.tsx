import * as React from 'react';

import RenderInput from './templates/RenderInput';

import { useForm } from './hooks/useForm';
import { FormData, InputTemplateProps, Value } from './types/formConfigs';

interface Props {
	formData: FormData;
	isSubmitted: boolean;
	defaultValues: Value;
	onSubmit: (result: any) => void;
	inputTemplates: InputTemplateProps;
	setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Formlee: React.FC<Props> = ({
	formData,
	onSubmit,
	isSubmitted,
	defaultValues,
	setIsSubmitted,
	inputTemplates,
}) => {
	const { values, errors, validate, handleChange } = useForm(
		formData.fields,
		defaultValues
	);

	const handleSubmit = React.useCallback(() => {
		if (validate()) onSubmit({ ...values });
		else setIsSubmitted(false);
	}, [onSubmit, values, validate, setIsSubmitted]);

	// React.useEffect(() => {
	// 	if (defaultValues) {
	// 		updateValues(defaultValues);
	// 	}
	// }, [defaultValues]);

	React.useEffect(() => {
		if (isSubmitted) {
			handleSubmit();
			setIsSubmitted(false);
		}
	}, [isSubmitted, handleSubmit, setIsSubmitted]);

	return (
		<>
			<RenderInput
				values={values}
				errors={errors}
				formData={formData}
				validate={validate}
				handleChange={handleChange}
				inputTemplates={inputTemplates}
			/>
		</>
	);
};
