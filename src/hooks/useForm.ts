import * as React from 'react';
import { useValidator } from '.';
import { FormField, Value } from '../types/formConfigs';

export const useForm = (fields: FormField[], data: Value) => {
	const formRef: React.MutableRefObject<boolean | undefined> = React.useRef();
	const [values, setValues] = React.useState<Value>({ ...data });
	const [inputStarted, setInputStarted] = React.useState<boolean>(false);

	const { errors, validate, resetError } = useValidator(fields, values);

	React.useEffect(() => {
		formRef.current = true;
		return () => {
			formRef.current = false;
		};
	}, []);

	const updateValues = React.useCallback((value: Value) => {
		if (!inputStarted) setValues({ ...value });
	}, []);

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (formRef.current) {
				const newState = { ...values };

				const targetType = e.target.type;
				const value = e.target.value;
				const name = e.target.name;

				resetError(name);
				setInputStarted(true);

				newState[name] =
					targetType === 'checkbox'
						? (newState[name] = e.target.checked)
						: value;

				setValues(newState);
			}
		},
		[values, inputStarted, errors]
	);

	return { values, errors, validate, updateValues, handleChange };
};
