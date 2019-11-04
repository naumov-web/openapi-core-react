import React from 'react';
import { Formik, Field } from 'formik'

// Components
import FormRow from '../../../../hocs/FormRow';
import Label from '../../../../ui-kit/Label';
import TextInput from '../../../../ui-kit/TextInput';
import PasswordInput from '../../../../ui-kit/PasswordInput';
import Button from '../../../../ui-kit/Button';
import validationRules from '../../../../../utils/validations/register_form';
import FieldError from '../../../../ui-kit/FieldError';

// Utils
import { mergeRecursive } from '../../../../../utils/merge_objects';

import './styles.styl';

const RegisterForm = () => {
  const formValues = {email: "", password: "", password_confirmation: ""};

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationRules}
      onSubmit={(values) => {console.log(values)}}
    >
      {({ 
        handleSubmit,
        handleChange,
        handleBlur,
        errors
      }) => {
        const mergedErrors = mergeRecursive(errors, {});
        
        return (
          <form className="register-form" action="" method="post" onSubmit={handleSubmit}>
            <FormRow>
              <>
                <Label text="Email:" htmlFor="email" />
                <Field 
                  name="email" 
                  render={
                    () => (
                      <TextInput 
                        name="email" 
                        id="email" 
                        placeholder="Введите Email" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                      />
                    )
                  } 
                />
                {mergedErrors.email && <FieldError text={mergedErrors.email} />}
              </>
            </FormRow>
            <FormRow>
              <>
                <Label text="Пароль:" htmlFor="password" />
                <Field 
                  name="password" 
                  render={
                    () => (
                      <PasswordInput 
                        name="password" 
                        id="password" 
                        placeholder="Введите пароль" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                      />
                    )
                  } 
                />
                {mergedErrors.password && <FieldError text={mergedErrors.password} />}
              </>
            </FormRow>
            <FormRow>
              <>
                <Label text="Подтвердите пароль:" htmlFor="password_confirmation" />
                <Field 
                  name="password_confirmation" 
                  render={
                    () => (
                      <PasswordInput 
                        name="password_confirmation" 
                        id="password_confirmation" 
                        placeholder="Подтвердите пароль" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                      />
                    )
                  } 
                />
                {mergedErrors.password_confirmation && <FieldError text={mergedErrors.password_confirmation} />}
              </>
            </FormRow>
            <FormRow>
              <Button text="Зарегистрироваться" type="submit" fullWidth />
            </FormRow>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;