import * as React from 'react';

import RenderInput from './templates/RenderInput';

import { useForm } from './hooks/useForm';
import { useValidator } from './hooks/useValidator';
import { FormData, InputTemplateProps, Value } from './configs/formConfigs';

interface Props {
	formData: FormData;
	isSubmitted: Boolean;
	defaultValues: Value;
	onSubmit: (result: any) => void;
	inputTemplates: InputTemplateProps;
	setIsSubmitted: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Formlee: React.FC<Props> = ({
	formData,
	onSubmit,
	isSubmitted,
	defaultValues,
	setIsSubmitted,
	inputTemplates,
}) => {
	const { values, handleChange } = useForm({ ...defaultValues });
	const { errors, validate } = useValidator(formData.fields, values);

	const handleSubmit = React.useCallback(() => {
		if (validate()) onSubmit({ ...values });
		else setIsSubmitted(false);
	}, [onSubmit, values, validate, setIsSubmitted]);

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

export default Formlee;
