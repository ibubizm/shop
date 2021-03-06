import { Formik } from 'formik'
import * as yup from 'yup'
import Button from 'react-bootstrap/Button'
import './reg.scss'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'
import { LOGIN_ROUTE } from '../utils/const'
import { Link } from 'react-router-dom'
import { registration } from '../http/userApi'

export const Registration = () => {

    const regClick = ({ name, lastName, email, password }) => {
        const response = registration(name, lastName, email, password)
        console.log(response)
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
            <Card style={{ width: 700 }} className="p-5 m-auto">
                <h1 className="m-auto">Registration</h1>
                <Formik
                    initialValues={{
                        name: '',
                        lastName: '',
                        email: '',
                        password: '',
                        repeatPassword: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => regClick(values)}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

                        <Form className="d-flex flex-column">
                            <Form.Group
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative">
                                <Form.Label>name</Form.Label>
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
                                <Form.Label >last name</Form.Label>
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
                                controlId="validationFormik103"
                                className="position-relative">
                                <Form.Label>email</Form.Label>
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
                                controlId="validationFormik104"
                                className="position-relative">
                                <Form.Label>password</Form.Label>
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
                                controlId="validationFormik105"
                                className="position-relative">
                                <Form.Label>repeat password</Form.Label>
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
                            <Row className="mt-3">
                                <div>
                                    have an account? <Link to={LOGIN_ROUTE}>log in</Link>
                                </div>
                                <Button
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                    className="align-self-end mt-2"
                                >
                                    registration
                                </Button>
                            </Row>

                        </Form>
                    )}
                </Formik>
            </Card>
        </>
    )
}