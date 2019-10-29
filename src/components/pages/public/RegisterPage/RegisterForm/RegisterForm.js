import React from 'react';

import FormRow from '../../../../hocs/FormRow';
import Label from '../../../../ui-kit/Label';
import TextInput from '../../../../ui-kit/TextInput';
import PasswordInput from '../../../../ui-kit/PasswordInput';
import Button from '../../../../ui-kit/Button';

const RegisterForm = () => {
  return <div className="register-form">
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
          <FormRow>
            <Button text="Зарегистрироваться" fullWidth />
          </FormRow>
  </div>;
};

export default RegisterForm;