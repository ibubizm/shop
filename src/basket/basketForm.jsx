import { reduxForm, Field } from 'redux-form'

export const BasketForm = () => {
    return (
        <form>
            <div>
                <Field placeholder="name" name="name" component="input" />
            </div>
            <div>
                <Field placeholder="phone" name="phone" component="input" />
            </div>
            <div>
                <Field placeholder="address" name="address" component="input" />
            </div>
        </form>
    )
}