import { Formik } from 'formik'
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'

export const Form = () => {
    const validationSchema = yup.object().shape({
        name: yup.string().required('required field'),
        lastName: yup.string().required()

    })
    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                password: '',
                repeatPassword: ''
            }}
            validateOnBlur
            onSubmit={(values) => console.log(values)}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className="form">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        name={'name'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >registration</Button>

                </div>
            )}
        </Formik>
    )
}