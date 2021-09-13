import { FormField, Error } from '../types/formConfigs';
export declare const useValidator: (fields: FormField[], values: any) => {
    errors: Error;
    resetError: (field: string) => void;
    validate: () => true | undefined;
};
