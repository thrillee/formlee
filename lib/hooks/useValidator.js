"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidator = void 0;
const React = __importStar(require("react"));
const useValidator = (fields, values) => {
    const formRef = React.useRef();
    const constraintData = createConstraint(fields);
    const [errors, setError] = React.useState(Object.assign({}, createErrorDefault(fields)));
    React.useEffect(() => {
        formRef.current = true;
        return () => {
            formRef.current = false;
        };
    }, []);
    const resetError = React.useCallback((field) => {
        if (formRef.current) {
            const newError = Object.assign({}, errors);
            newError[field] = undefined;
            setError(newError);
        }
    }, [errors]);
    const validate = React.useCallback(() => {
        if (formRef.current) {
            const constraintKey = Object.keys(constraintData);
            let isValid = true;
            const newErrors = Object.assign({}, errors);
            constraintKey.forEach((c) => {
                const value = values[c];
                const cData = constraintData[c];
                const validatorFunc = cData.validator;
                let notValid;
                if (validatorFunc !== undefined) {
                    if ((cData.dependent &&
                        cData.dependent.value === values[cData.dependent.fieldName]) ||
                        cData.dependent === undefined) {
                        notValid = cData.isCustom
                            ? validatorFunc(values)
                            : validatorFunc(value);
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
        return undefined;
    }, [values, errors, fields]);
    return { errors, resetError, validate };
};
exports.useValidator = useValidator;
const createErrorDefault = (fields) => {
    const errors = {};
    fields.forEach((f) => {
        errors[f.name] = undefined;
    });
    return errors;
};
const createConstraint = (fields) => {
    const constraints = {};
    fields.forEach((f) => {
        constraints[f.name] = {
            validator: f.validation,
            isCustom: f.isCustomValidation,
            dependent: f.dependent,
        };
    });
    return constraints;
};
//# sourceMappingURL=useValidator.js.map