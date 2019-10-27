import React from 'react';
import SubHeader from '../../../ui-kit/SubHeader';
import FormContainer from '../../../hocs/FormContainer';
import FormRow from '../../../hocs/FormRow';

import './styles.styl';
import Label from '../../../ui-kit/Label';
import TextInput from '../../../ui-kit/TextInput';

const RegisterPage = () => {
  return (
    <div className="public-page register-page">
      <FormContainer>
        <>
          <SubHeader text="Регистрация" />
          <FormRow>
            <>
              <Label text="Email:" htmlFor="email" />
              <TextInput name="email" id="email" placeholder="Введите свой Email" />
            </>
          </FormRow>
        </>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;