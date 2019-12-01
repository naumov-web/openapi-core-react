import React from 'react';
import FormContainer from '../../../../hocs/FormContainer';
import SubHeader from '../../../../ui-kit/SubHeader';
import ProjectForm from './ProjectForm';

import './styles.styl';

const ProjectFormPage = () => {
  return (
    <div className="account-page project-form-page">
      <FormContainer>
        <>
          <SubHeader text="Новый проект" />
          <ProjectForm />
        </>
      </FormContainer>
    </div>
  );
};

export default ProjectFormPage;