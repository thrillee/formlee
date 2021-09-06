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
const useForm = (data) => {
    const formRef = React.useRef();
    const [values, setValues] = React.useState(Object.assign({}, data));
    React.useEffect(() => {
        formRef.current = true;
        return () => {
            formRef.current = false;
        };
    }, []);
    React.useEffect(() => {
        if (formRef.current) {
            setValues(data);
        }
    }, [data]);
    const handleChange = (e) => {
        if (formRef.current) {
            const newState = Object.assign({}, values);
            const targetType = e.target.type;
            const value = e.target.value;
            const name = e.target.name;
            newState[name] =
                targetType === 'checkbox' ? (newState[name] = e.target.checked) : value;
            setValues(newState);
        }
    };
    return { values, handleChange };
};
exports.useForm = useForm;
//# sourceMappingURL=useForm.js.map