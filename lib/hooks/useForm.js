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
exports.useForm = void 0;
const React = __importStar(require("react"));
const _1 = require(".");
const useForm = (fields, data) => {
    const formRef = React.useRef();
    const [values, setValues] = React.useState(Object.assign({}, data));
    const [inputStarted, setInputStarted] = React.useState(false);
    const { errors, validate, resetError } = _1.useValidator(fields, values);
    React.useEffect(() => {
        formRef.current = true;
        return () => {
            formRef.current = false;
        };
    }, []);
    const updateValues = React.useCallback((value) => {
        if (!inputStarted)
            setValues(Object.assign({}, value));
    }, []);
    const handleChange = React.useCallback((e) => {
        if (formRef.current) {
            const newState = Object.assign({}, values);
            const targetType = e.target.type;
            const value = e.target.value;
            const name = e.target.name;
            resetError(name);
            setInputStarted(true);
            newState[name] =
                targetType === 'checkbox'
                    ? (newState[name] = e.target.checked)
                    : value;
            setValues(newState);
        }
    }, [values, inputStarted, errors]);
    return { values, errors, validate, updateValues, handleChange };
};
exports.useForm = useForm;
//# sourceMappingURL=useForm.js.map