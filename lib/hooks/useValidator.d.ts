import { FormField, Error } from '../types/formConfigs';
export declare const useValidator: (fields: FormField[], values: any) => {
    errors: Error;
    validate: () => true | undefined;
};
