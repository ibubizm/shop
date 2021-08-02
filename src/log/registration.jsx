import { Formik } from 'formik'
import * as yup from 'yup'
import Button from 'react-bootstrap/Button'
import './reg.scss'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

export const Registration = () => {
    const createUser = (obj) => {
        axios.post('http://localhost:3001/users', obj)
    }


    const validationSchema = yup.object().shape({
        name: yup.string().typeError('should be string').required('required field'),
        lastName: yup.string().typeError('should be string').required('required field'),
        email: yup.string().email('invalid email').required('required field'),
        password: yup.string().min(2, 'too short').typeError('should be string').required('required field'),
        repeatPassword: yup.string().oneOf([yup.ref('password')], 'deferent passwords')

    })
    return (
        <>
            <h1>Registration</h1>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                validateOnBlur
                onSubmit={(values) => createUser(values)}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form>
                        <Form.Group
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative">
                            <Form.Label htmlFor="name">name</Form.Label>
                            <Form.Control
                                type="text"
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative">
                            <Form.Label htmlFor="lastName">last name</Form.Label>
                            <Form.Control
                                type="text"
                                name={'lastName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative">
                            <Form.Label htmlFor="email">email</Form.Label>
                            <Form.Control
                                type="text"
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative">
                            <Form.Label htmlFor="password">password</Form.Label>
                            <Form.Control
                                type="password"
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative">
                            <Form.Label htmlFor="repeatPassword">repeat password</Form.Label>
                            <Form.Control
                                type="password"
                                name={'repeatPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.repeatPassword}
                                isInvalid={!!errors.repeatPassword}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.repeatPassword}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type={'submit'}
                            style={{ marginTop: 20 }}
                        >
                            registration
                        </Button>

                    </Form>
                )}
            </Formik>
        </>
    )
}