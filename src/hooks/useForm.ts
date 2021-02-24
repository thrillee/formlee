import * as React from 'react';
import { Value } from '../configs/formConfigs';

export const useForm = (data: Value) => {
	const formRef: React.MutableRefObject<boolean | undefined> = React.useRef();
	const [values, setValues] = React.useState<Value>({ ...data });

	React.useEffect(() => {
		formRef.current = true;
		return () => {
			formRef.current = false;
		};
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (formRef.current) {
			const newState = { ...values };

			const targetType = e.target.type;
			const value = e.target.value;
			const name = e.target.name;

			if (targetType === 'checkbox') {
				newState[name] = e.target.checked;
			} else {
				newState[name] = value;
			}
			setValues(newState);
		}
	};

	return { values, handleChange };
};
