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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formlee = void 0;
const React = __importStar(require("react"));
const RenderInput_1 = __importDefault(require("./templates/RenderInput"));
const useForm_1 = require("./hooks/useForm");
const Formlee = ({ isEdit, formData, onSubmit, isSubmitted, defaultValues, setIsSubmitted, inputTemplates, }) => {
    const { values, errors, validate, updateValues, handleChange } = useForm_1.useForm(formData.fields, defaultValues);
    const handleSubmit = React.useCallback(() => {
        if (validate())
            onSubmit(Object.assign({}, values));
        else
            setIsSubmitted(false);
    }, [onSubmit, values, validate, setIsSubmitted]);
    React.useEffect(() => {
        if (defaultValues && isEdit) {
            updateValues(defaultValues);
        }
    }, [defaultValues, isEdit]);
    React.useEffect(() => {
        if (isSubmitted) {
            handleSubmit();
            setIsSubmitted(false);
        }
    }, [isSubmitted, handleSubmit, setIsSubmitted]);
    return (React.createElement(React.Fragment, null,
        React.createElement(RenderInput_1.default, { values: values, errors: errors, formData: formData, validate: validate, handleChange: handleChange, inputTemplates: inputTemplates })));
};
exports.Formlee = Formlee;
//# sourceMappingURL=Formlee.js.map