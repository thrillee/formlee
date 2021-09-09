import * as React from 'react';
import { Value } from '../types/formConfigs';
export declare const useForm: (data: Value) => {
    values: Value;
    updateValues: (value: Value) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
