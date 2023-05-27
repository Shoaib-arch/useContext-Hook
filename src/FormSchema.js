import * as yup from "yup";

export const Schema = yup.object({
    name:yup.string().min(3).max(19).required("Please enter a valid name"),
    gmail:yup.string().min(3).max(19).required("Please enter a email name"),
})