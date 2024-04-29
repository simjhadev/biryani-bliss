"use client"

import { Field, FieldProps, FieldMetaProps, useFormikContext } from "formik";
import { formValuesType, OptionType } from "@/app/types/types";



type compProps = {
    setOptions: (arg: OptionType[] | ((arg: OptionType[]) => OptionType[])) => void;
    options: OptionType[];
}

const AddOptions = ({ setOptions, options }: compProps) => {

    const { values }: { values: formValuesType } = useFormikContext();

    const inputStyle = "ring-1 p-2 rounded-sm outline-none h-[45px]";
    const tdStyle = "p-2";
    const thStyle = "py-5 p-2";

    const addOptions = () => {
        console.log("values", values);
        setOptions((prev) => [...prev, values.option])
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <label className="text-sm">Addon</label>
            <div className="flex">

                <Field name="option.title"  placeholder="Title">
                    {({
                        field, meta,
                    }: FieldProps) => (
                        <div className="flex flex-col">
                            <input
                                className={`${inputStyle}`}
                                type="text"
                                {...field}
                            />
                            {meta.touched && meta.error && (
                                <div className="text-buttonBg">{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>

                <Field name="option.additionalPrice"  placeholder="Additional Price">
                    {({
                        field, // { name, value, onChange, onBlur }
                        meta,
                    }: FieldProps) => (
                        <div className="flex flex-col">
                            <input
                                className={`${inputStyle}`}
                                type="number"
                                {...field}
                            />
                            {meta.touched && meta.error && (
                                <div className="text-buttonBg">{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>

                <div
                    className="bg-buttonBg ml-2 px-4 py-2 h-[45px] text-white cursor-pointer"
                    onClick={addOptions}
                >
                    Add
                </div>
            </div>

            {options.length > 0 && (
                <table className="table-fixed mt-5 ring-1 ring-gray-100 rounded-md w-full">
                    <thead className="bg-gray-100 text-left px-2">
                        <tr>
                            <th className={`${thStyle} w-[40%]`}>Title</th>
                            <th className={`${thStyle}`}>Additional Price</th>
                            <th
                                className={`${thStyle} w-[100px] md:w-[200px]`}
                            ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {options.map((item,index) => (
                            <tr key={item.title+index}>
                                <td className={`${tdStyle}`}>{item.title}</td>
                                <td className={`${tdStyle}`}>
                                    ${item.additionalPrice}
                                </td>
                                <td className={`${tdStyle}`}>
                                    <div
                                        className="bg-buttonBg rounded-md p-2 w-auto text-center text-white cursor-pointer"
                                        onClick={() =>
                                            setOptions(
                                                options.filter(
                                                    (opt) => opt.title !== item.title
                                                )
                                            )
                                        }
                                    >
                                        Delete
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AddOptions;