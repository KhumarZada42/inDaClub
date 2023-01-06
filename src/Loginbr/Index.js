import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'

const Loginbr = () => {
    return (
        <Formik
            initialValues={{ Name: '', password: '', email: '', repeatpassword: '' }}
            validationSchema={Yup.object({
                Name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required').trim(),
                repeatpassword: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required').trim(),
                email: Yup.string().email('Invalid email address').required('Required').trim(),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <div className='card'>

                    <div><label htmlFor="Name">Name</label>
                        <Field name="Name" type="text" />
                        <ErrorMessage name="Name" /></div>

                    <div><label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" /></div>

                    <div><label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" /></div>

                    <div><label htmlFor="repeatpassword">Repeat Password</label>
                        <Field name="repeatpassword" type="repeatpassword" />
                        <ErrorMessage name="repeatpassword" /></div>

                    <button type="submit">Submit</button>

                </div>
            </Form>
        </Formik>
    );
};
export default Loginbr