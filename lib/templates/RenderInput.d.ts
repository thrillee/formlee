import * as React from 'react';
import { Value, Error, FormData, InputTemplateProps } from '../types/formConfigs';
interface FormProp {
    formData: FormData;
    values: Value;
    errors: Error;
    validate: () => true | undefined;
    inputTemplates: InputTemplateProps;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const RenderInput: React.FC<FormProp>;
export default RenderInput;
