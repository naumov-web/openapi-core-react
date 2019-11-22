import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik'

// Components
import FormRow from '../../../../hocs/FormRow';
import Label from '../../../../ui-kit/Label';
import TextInput from '../../../../ui-kit/TextInput';
import PasswordInput from '../../../../ui-kit/PasswordInput';
import Button from '../../../../ui-kit/Button';
import validationRules from '../../../../../utils/validations/profile_form';
import FieldError from '../../../../ui-kit/FieldError';

// Utils
import { mergeRecursive } from '../../../../../utils/merge_objects';

import './styles.styl';
import SuccessMessage from '../../../../ui-kit/SuccessMessage';

const ProfileForm = ({ submitForm, isLoading, serverErrors, profile, successMessage }) => {
  const formValues = mergeRecursive(
    {email: profile.email}, 
    {password: "", password_confirmation: ""}
  );
  
  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationRules}
      onSubmit={(values) => {submitForm(values)}}
      enableReinitialize
    >
      {({ 
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors
      }) => {
        const mergedErrors = mergeRecursive(errors, serverErrors);

        return (
          <form className="profile-form" action="" method="post" onSubmit={handleSubmit}>
            {successMessage && (
              <FormRow>
                <SuccessMessage text={successMessage} />
              </FormRow>
            )}
            <FormRow>
              <>
                <Label text="Email:" htmlFor="email" />
                <Field 
                  name="email" 
                  value={values.email}
                  render={
                    () => (
                      <TextInput 
                        name="email" 
                        id="email" 
                        placeholder="Введите Email" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.email}
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
              <Button text="Сохранить" type="submit" fullWidth isLoading={isLoading} />
            </FormRow>
          </form>
        );
      }}
    </Formik>
  );
};

ProfileForm.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  serverErrors: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  submitForm: PropTypes.func,
  successMessage: PropTypes.string
};

ProfileForm.defaultProps = {
  submitForm: () => {},
  successMessage: null
};

export default ProfileForm;