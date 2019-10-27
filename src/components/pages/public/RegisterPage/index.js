import React from 'react';
import SubHeader from '../../../ui-kit/SubHeader';
import FormContainer from '../../../hocs/FormContainer';
import FormRow from '../../../hocs/FormRow';

import './styles.styl';
import Label from '../../../ui-kit/Label';
import TextInput from '../../../ui-kit/TextInput';
import PasswordInput from '../../../ui-kit/PasswordInput';

const RegisterPage = () => {
  return (
    <div className="public-page register-page">
      <FormContainer>
        <>
          <SubHeader text="Регистрация" />
          <FormRow>
            <>
              <Label text="Email:" htmlFor="email" />
              <TextInput name="email" id="email" placeholder="Введите Email" />
            </>
          </FormRow>
          <FormRow>
            <>
              <Label text="Пароль:" htmlFor="password" />
              <PasswordInput name="password" id="password" placeholder="Введите пароль" />
            </>
          </FormRow>
          <FormRow>
            <>
              <Label text="Подтвердите пароль:" htmlFor="password_confirmation" />
              <PasswordInput 
                name="password_confirmation" 
                id="password_confirmation" 
                placeholder="Подтвердите пароль" 
              />
            </>
          </FormRow>
        </>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;