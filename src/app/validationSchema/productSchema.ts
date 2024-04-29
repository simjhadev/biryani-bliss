import * as Yup from 'yup';
import { OptionType } from '../types/types';

const optionSchema = Yup.object().shape({
    title: Yup.string()
        .when('additionalPrice',{
            is: (val: string) => (val !== null && val !== undefined),
            then: (schema) => schema.required('Required'),
            otherwise: (schema) => schema.notRequired(),
        }),
    additionalPrice: Yup.number()
        .notRequired()
        .moreThan(-1, 'Enter a positive number')
        .typeError('Enter valid Amount')
        .when('title', {
            is: (val: string) => (val !== null && val !== undefined),
            then: (schema) => schema.required('Required'),
            otherwise: (schema) => schema.notRequired(),
        })
},[['title','additionalPrice']]);

export const productSchema = Yup.object().shape({
    file: Yup.string()
        .required('Required'),
    title: Yup.string()
        .required('Required'),
    desc: Yup.string()
        .required('Required'),
    price: Yup.number()
        .required('Required field')
        .moreThan(-1, 'Enter a positive number'),
    catSlug: Yup.string()
        .required()
        .oneOf(["nonvegBiryani", "vegBiryani", "seafoodBiryani"]),
    option: optionSchema,

});



/* additionalPrice: Yup.number().notRequired().moreThan(-1,'Enter a positive number')
                          .typeError('Enter valid Amount'), */