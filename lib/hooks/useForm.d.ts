import * as React from 'react';
import { FormField, Value } from '../types/formConfigs';
export declare const useForm: (fields: FormField[], data: Value) => {
    values: Value;
    errors: import("../types/formConfigs").Error;
    validate: () => true | undefined;
    updateValues: (value: Value) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
