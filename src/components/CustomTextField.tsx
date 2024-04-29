import { useField } from "formik";
type inputProps = {
    name: string,
    type: string,
    placeholder: string,
    label: string,
    step?: string,
    rows?: number,
}

const CustomTextField = ({label, ...props} : inputProps) => {
    const [field, meta] = useField(props);
    const inputStyle = "ring-1 p-2 rounded-sm outline-none";
    return(
    <div className="w-full flex flex-col gap-2">
        <label className="text-sm">{label}</label>
        <textarea {...props} {...field} className={`${inputStyle}`}/>
        {meta.touched && meta.error && (
        <div className="text-buttonBg">{meta.error}</div>
        )}
    </div>
    );
    
};

export default CustomTextField;