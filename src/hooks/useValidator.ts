import * as React from 'react';
import {
	validator,
	FormField,
	Error,
	FormDependency,
} from '../configs/formConfigs';

interface Constraint {
	[key: string]: {
		validator?: validator;
		isCustom?: boolean;
		dependent?: FormDependency;
	};
}

export const useValidator = (fields: FormField[], values: any) => {
	const formRef: React.MutableRefObject<boolean | undefined> = React.useRef();
	const constraintData = createConstraint(fields);
	const [errors, setError] = React.useState<Error>({
		...createErrorDefault(fields),
	});

	React.useEffect(() => {
		formRef.current = true;
		return () => {
			formRef.current = false;
		};
	}, []);

	const validate = () => {
		if (formRef.current) {
			const constraintKey = Object.keys(constraintData);
			let isValid = true;
			const newErrors: Error = { ...errors };

			constraintKey.forEach((c) => {
				let value = values[c];
				let cData = constraintData[c];
				let validator = cData.validator;

				let notValid = undefined;
				if (validator !== undefined) {
					if (
						(cData.dependent &&
							cData.dependent.value === values[cData.dependent.fieldName]) ||
						cData.dependent === undefined
					) {
						notValid = cData.isCustom ? validator(values) : validator(value);
					}
				}

				newErrors[c] = notValid;

				if (notValid) {
					isValid = false;
				}
			});

			setError(newErrors);
			return isValid;
		}
	};
	return { errors, validate };
};

const createErrorDefault = (fields: FormField[]) => {
	const errors: Error = {};

	fields.forEach((f) => {
		errors[f.name] = undefined;
	});
	return errors;
};

const createConstraint = (fields: FormField[]) => {
	// Constraint Data{
	//     email: {validator: validateEmail, isCustom: false},
	// }
	const constraints: Constraint = {};

	// constraints['email'] = {validator: () => 1, isCustom: false}
	// constraints['password'] = {validator: () => 1, isCustom: false}

	fields.forEach((f) => {
		constraints[f.name] = {
			validator: f.validation,
			isCustom: f.isCustomValidation,
			dependent: f.dependent,
		};
	});

	return constraints;
};
