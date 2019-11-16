import React from 'react';
import SubHeader from '../../../ui-kit/SubHeader';
import FormContainer from '../../../hocs/FormContainer';
import ProfileForm from './ProfileForm';

import './styles.styl';

const ProfilePage = () => {
  return (
    <div className="account-page profile-page">
      <FormContainer>
        <>
          <SubHeader text="Настройки пользователя" />
          <ProfileForm />
        </>
      </FormContainer>
    </div>
  );
};

export default ProfilePage;