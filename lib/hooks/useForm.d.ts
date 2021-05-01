import * as React from 'react';
import { Value } from '../types/formConfigs';
export declare const useForm: (data: Value) => {
    values: Value;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
