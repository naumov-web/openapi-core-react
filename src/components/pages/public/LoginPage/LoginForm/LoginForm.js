import React from 'react';
import { Formik, Field } from 'formik'

import FormRow from '../../../../hocs/FormRow';
import Label from '../../../../ui-kit/Label';
import TextInput from '../../../../ui-kit/TextInput';
import PasswordInput from '../../../../ui-kit/PasswordInput';
import Button from '../../../../ui-kit/Button';
import validationRules from '../../../../../utils/validations/login_form';
import FieldError from '../../../../ui-kit/FieldError';

// Utils
import { mergeRecursive } from '../../../../../utils/merge_objects';

const LoginForm = ({ submitForm, isLoading, serverErrors }) => {
  const formValues = {email: "", password: ""};

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationRules}
      onSubmit={(values) => {submitForm(values)}}
    >
      {({ 
        handleSubmit,
        handleChange,
        handleBlur,
        errors
      }) => {
        const mergedErrors = mergeRecursive(errors, serverErrors);

        return (
          <form className="login-form" action="" method="post" onSubmit={handleSubmit}>
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
              <Button text="Авторизироваться" type="submit" fullWidth isLoading={isLoading} />
            </FormRow>
          </form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;