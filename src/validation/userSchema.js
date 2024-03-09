import * as yup from 'yup'

export const userSchema = yup.object().shape({
    email: yup.string().email("Valid email required").required("This is a required field"),
})