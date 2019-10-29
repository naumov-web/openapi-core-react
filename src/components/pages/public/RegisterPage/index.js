import React from 'react';
import SubHeader from '../../../ui-kit/SubHeader';
import FormContainer from '../../../hocs/FormContainer';

import './styles.styl';

import RegisterForm from './RegisterForm';


const RegisterPage = () => {
  return (
    <div className="public-page register-page">
      <FormContainer>
        <>
          <SubHeader text="Регистрация" />
          <RegisterForm />
        </>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;