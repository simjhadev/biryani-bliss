"use client"

import { useField } from "formik";
type inputProps = {
    name: string,
    placeholder?: string,
    label: string,
    default?: string,
    children : React.ReactNode,
}

const CustomSelectField = ({label, children, ...props} : inputProps) => {
    const [field, meta] = useField(props);
    const inputStyle = "ring-1 p-2 rounded-sm outline-none";
    return(
    <div className="w-full flex flex-col gap-2">
        <label className="text-sm">{label}</label>
        <select {...props} {...field} className={`${inputStyle}`}>
            {children}
        </select>
        {meta.touched && meta.error && (
        <div className="text-buttonBg">{meta.error}</div>
        )}
    </div>
    );
    
};

export default CustomSelectField;