import React from 'react';
import SubHeader from '../../../ui-kit/SubHeader';
import FormContainer from '../../../hocs/FormContainer';
import FormRow from '../../../hocs/FormRow';

import './styles.styl';
import Label from '../../../ui-kit/Label';

const RegisterPage = () => {
  return (
    <div className="public-page register-page">
      <FormContainer>
        <>
          <SubHeader text="Регистрация" />
          <FormRow>
            <>
              <Label text="Email:" htmlFor="email" />
            </>
          </FormRow>
        </>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;