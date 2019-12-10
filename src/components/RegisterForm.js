import React, {Component} from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {customInput, customSelect, discounts} from "./fields";
import {matchPassword, maxLength, minLength, required, asyncValidate} from "../validations";
import './RegisterForm.css'
import capitalize from "capitalize";

class RegisterForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="firstname" component={customInput} type="text" label="First Name" validate={[required]}
                       normalize={capitalize}/>
                <Field name="surename" component={customInput} type="text" label="SurName" validate={[required]}
                       normalize={capitalize}/>
                <Field name="username" component={customInput} type="text" label="UserName"
                       validate={[required, minLength, maxLength]}/>
                <Field name="password" component={customInput} type="password" label="Password" validate={[required]}/>
                <Field name="confirmpassword" component={customInput} type="password" label="Confirm Password"
                       validate={[required, matchPassword]}/>
                <Field name="preference" component={customSelect} label="Preferred Language"/>
                <Field
                    name="newsletter"
                    component={customInput}
                    type="checkbox"
                    label='Sign Up to newsletter ?'
                />
                <FieldArray name="discountCodes" component={discounts}></FieldArray>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

RegisterForm = reduxForm({
    form: 'register',
    asyncValidate,
    asyncBlurFields: ['username']
})(RegisterForm);

export default RegisterForm;
