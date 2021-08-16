import { Formik } from 'formik'
import * as yup from 'yup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { HOME_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { login } from '../http/userApi'
import { useDispatch } from 'react-redux'
import { user, auth } from '../redux/reducers/actions'


export const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const validationSchema = yup.object().shape({
        email: yup.string().email('invalid email').required('required field'),
        password: yup.string().min(2, 'too short').typeError('should be string').required('required field'),
    })

    const signIn = async ({ email, password }) => {
        try {
            const response = await login(email, password)
            dispatch(user(response))
            dispatch(auth(true))
            history.push(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Card className="p-5 m-auto" style={{ width: 600 }}>
            <h1 className="m-auto">Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}
                validateOnBlur
                onSubmit={(values) => signIn(values)}
                validationSchema={validationSchema}
            >
                {({ values, errors, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form className="d-flex flex-column">
                        <Form.Group
                            md="4"
                            // controlId="validationFormik01"
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
                            // controlId="validationFormik02"
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
                        <Row className="d-flex justify-content-between mt-3 ">
                            <div >
                                no account? <Link to={REGISTRATION_ROUTE}>registration</Link>
                            </div>

                            <Button
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}
                                className={'align-self-end mt-2'}
                            >
                                registration
                            </Button>
                        </Row>
                    </Form>
                )
                }
            </Formik>
        </Card>
    )
}