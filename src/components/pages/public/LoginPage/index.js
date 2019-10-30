import React from 'react';
import FormContainer from '../../../hocs/FormContainer';
import SubHeader from '../../../ui-kit/SubHeader';

import './styles.styl';

import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="public-page login-page">
      <FormContainer>
        <>
          <SubHeader text="Авторизация" />
          <LoginForm />
        </>
      </FormContainer>
    </div>
  );
};

export default LoginPage;