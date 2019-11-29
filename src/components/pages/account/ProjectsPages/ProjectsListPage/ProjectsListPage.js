import React from 'react';
import SubHeader from '../../../../ui-kit/SubHeader';

import './styles.styl';
import AddLinkButton from '../../../../ui-kit/AddLinkButton';

const ProjectsListPage = () => {
  return (
    <div className="account-page projects-list-page">
      <SubHeader text="Проекты" />
      <div className="add-button-row">
        <AddLinkButton link="/projects/add" text="Добавить" />
      </div>
    </div>
  );
};

export default ProjectsListPage;