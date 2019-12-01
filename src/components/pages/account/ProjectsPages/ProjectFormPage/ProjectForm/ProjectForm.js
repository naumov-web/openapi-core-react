import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';

// Components
import FormRow from '../../../../../hocs/FormRow';
import Label from '../../../../../ui-kit/Label';
import TextInput from '../../../../../ui-kit/TextInput';
import TextArea from '../../../../../ui-kit/TextArea';
import Button from '../../../../../ui-kit/Button';
import FieldError from '../../../../../ui-kit/FieldError';

// Utils
import { mergeRecursive } from '../../../../../../utils/merge_objects';
import validationRules from '../../../../../../utils/validations/project_form';

const ProjectForm = ({ submitForm, isLoading, serverErrors }) => {

  const formValues = {
    name: '',
    description: '',
    format_id: null,
  };

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
            <FormRow>
              <>
                <Label text="Наименование проекта:" htmlFor="name" />
                <Field 
                  name="name" 
                  value={values.name}
                  render={
                    () => (
                      <TextInput 
                        name="name" 
                        id="name" 
                        placeholder="Введите наименование проекта" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.name}
                      />
                    )
                  } 
                />
                {mergedErrors.name && <FieldError text={mergedErrors.name} />}
              </>
            </FormRow>
            <FormRow>
              <>
                <Label text="Описание проекта:" htmlFor="description" />
                <Field 
                  name="description" 
                  value={values.description}
                  render={
                    () => (
                      <TextArea 
                        name="description" 
                        id="description" 
                        placeholder="Введите описание проекта" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.description}
                        rows={8}
                      />
                    )
                  } 
                />
                {mergedErrors.description && <FieldError text={mergedErrors.description} />}
              </>
            </FormRow>
            <FormRow>
              <Button text="Сохранить" type="submit" isLoading={isLoading} />
            </FormRow>
          </form>
        );
      }}
    </Formik>
  );

}

ProjectForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  submitForm: PropTypes.func,
};

ProjectForm.defaultProps = {
  submitForm: () => {}
};

export default ProjectForm;