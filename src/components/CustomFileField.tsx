"use client";

import Image from "next/image";
import { Field, FieldProps, useFormikContext, FormikProps } from "formik";
import { formValuesType } from "@/app/types/types";


const CustomFileField = () => {

    const { values, setFieldValue }: FormikProps<formValuesType> = useFormikContext();
    return (
        <div className="w-full flex-col">

            <div className="w-full flex">
                <label
                    className="text-md text-white bg-buttonBg  p-4 border border-buttonBg rounded-l-lg cursor-pointer flex gap-4 items-center"
                    htmlFor="file"
                >
                    <Image src="/upload.png" alt="" width={30} height={20} />
                    <span>Upload Image</span>
                </label>
                <div className="p-4 border w-[300px] rounded-r-lg border-gray-200">
                    {values.file?.name}
                </div>
            </div>
            <Field name="file">
                {({
                    field, // { name, value, onChange, onBlur }
                    meta,
                }: FieldProps) => (
                    <>
                        {meta.touched && meta.error && (
                            <div className="text-buttonBg">{meta.error}</div>
                        )}
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFieldValue('file', e.currentTarget.files![0]); }}
                            className="hidden"
                            name="file"
                            id="file"
                            type="file"
                        />
                    </>

                )}
            </Field>
        </div>
    );
};

export default CustomFileField;