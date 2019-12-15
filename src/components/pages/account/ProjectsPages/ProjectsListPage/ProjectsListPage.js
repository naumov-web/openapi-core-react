import React from 'react';
import SubHeader from '../../../../ui-kit/SubHeader';
import AddLinkButton from '../../../../ui-kit/AddLinkButton';
import ProjectsTable from './ProjectsTable';

import './styles.styl';

const ProjectsListPage = () => {
  return (
    <div className="account-page projects-list-page">
      <SubHeader text="Проекты" />
      <div className="add-button-row">
        <AddLinkButton link="/projects/add" text="Добавить" />
      </div>
      <div className="projects-table-wrapper">
        <ProjectsTable />
      </div>
    </div>
  );
};

export default ProjectsListPage;