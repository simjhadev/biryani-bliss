"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Formik, Form } from "formik";
import CustomInputField from "@/components/CustomInputField";
import CustomTextField from "@/components/CustomTextField";
import CustomSelectField from "@/components/CustomSelectField";
import CustomFileField from "@/components/CustomFileField";
import { productSchema } from "../validationSchema/productSchema";
import AddOptions from "@/components/AddOptions";
import { formValuesType } from "../types/types";

//import {  } from 'next-cloudinary';

type Inputs = {
    title: string;
    desc: string;
    price: number;
    catSlug: string;
};

type Options = {
    title: string;
    additionalPrice: number;
};

const AddProductPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    //const inputStyle = "ring-1 p-2 rounded-sm outline-none";

    /* const [inputs, setInputs] = useState({
      title: "",
      desc: "",
      price: 0,
      catSlug: "nonvegBiryani",
    }); */

    const [options, setOptions] = useState<Options[]>([]);

    //const [file, setFile] = useState<File>();


    /* const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const item = (target.files as FileList)[0];
      setFile(item);
    };
   */
    const upload = async (file: File) => {
        const data = new FormData();
        data.append("file", file!);

        const res = await fetch("/api/uploadImg", {
            method: "POST",
            body: data,
        });
        //console.log("Response",res);
        const resData = await res.json();
        return resData;
    };

     const handleSubmit = async (formValues: formValuesType) => {
        //e.preventDefault();
        //console.log(inputs, options);
        try {
            const { url } = await upload(formValues.file!);
            //console.log(url);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
                method: "POST",
                body: JSON.stringify({
                    img: url,
                    title: formValues.title,
                    desc: formValues.desc,
                    price: formValues.price,
                    catSlug: formValues.catSlug,
                    isFeatured: Boolean(formValues.isFeatured),
                    options: options,
                }),
            });
            const data = await res.json();
            console.log(data);
            router.push(`/product/${data.id}`);
        } catch (err) {
            console.log(err);
        }
    }; 

    if (status === "loading") {
        return <p>Loading...</p>;
    }
    if (status === "unauthenticated" || !session?.user.isAdmin) {
        router.push("/");
    }

    return (
        <div className="p-4 lg:px-20 xl:px-40 flex items-center justify-center">
            <Formik
                initialValues={{
                    file: null,
                    title: "",
                    desc: "",
                    price: 0,
                    catSlug: "nonvegBiryani",
                    isFeatured: false,
                    option: {
                        title: "",
                        additionalPrice: 0,
                    },
                }}
                onSubmit={async(values, action) => {
                    console.log("Submitted.", values);
                    await handleSubmit(values);
                }}
                validationSchema={productSchema}
            >
                {(props) => (
                    <Form>
                        <div className="flex flex-wrap w-full gap-6">
                            <h1 className="text-3xl mb-2 font-bold">Add New Product</h1>
                            <CustomFileField />
                            <CustomInputField
                                label="Title"
                                type="text"
                                placeholder="Product Title"
                                name="title"
                            />
                            <CustomTextField
                                rows={3}
                                label="Description"
                                type="text"
                                placeholder="Product description"
                                name="desc"
                            />
                            <CustomInputField
                                label="Price"
                                type="number"
                                placeholder="00.00"
                                name="price"
                                step="0.01"
                            />
                            <CustomSelectField label="Category" name="catSlug" default="nonvegBiryani">
                                <option value="nonvegBiryani">Non-veg Biryani</option>
                                <option value="vegBiryani">Veg Biryani</option>
                                <option value="seafoodBiryani">Seafood Biryani</option>
                            </CustomSelectField>
                            <CustomSelectField label="Is Featured" name="isFeatured" default="false">
                                <option value="true">True</option>
                                <option value="false">
                                    False
                                </option>
                            </CustomSelectField>
                            <AddOptions setOptions={setOptions} options={options} />

                            <button
                                type="submit"
                                className="bg-buttonBg p-4 text-white w-48 rounded-md relative h-14 flex items-center justify-center"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProductPage;
