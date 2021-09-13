import * as React from 'react';
import { FormData, InputTemplateProps, Value } from './types/formConfigs';
interface Props {
    formData: FormData;
    isSubmitted: boolean;
    defaultValues: Value;
    onSubmit: (result: any) => void;
    isEdit?: true;
    inputTemplates: InputTemplateProps;
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const Formlee: React.FC<Props>;
export {};
