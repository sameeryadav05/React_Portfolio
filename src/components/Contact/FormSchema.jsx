import * as yup from 'yup'

export const FormSchema = yup.object({
    Name:yup.string().min(2).max(20).required("Name is required").trim(),
    Email:yup.string().email().required("Email is required"),
})