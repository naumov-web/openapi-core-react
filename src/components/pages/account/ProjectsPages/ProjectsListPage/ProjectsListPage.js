/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// Components
import SubHeader from '../../../../ui-kit/SubHeader';
import AddLinkButton from '../../../../ui-kit/AddLinkButton';
import ProjectsTable from './ProjectsTable';
import Pagination from '../../../../Pagination';

import './styles.styl';

const ProjectsListPage = ({ 
  items, 
  count, 
  limit, 
  offset, 
  sort_by, 
  sort_direction, 
  onChangePage, 
  onChangeSorting 
}) => {
  return (
    <div className="account-page projects-list-page">
      <SubHeader text="Проекты" />
      <div className="add-button-row">
        <AddLinkButton link="/projects/add" text="Добавить" />
      </div>
      <div className="projects-table-wrapper">
        <ProjectsTable 
          items={items} 
          sort_by={sort_by} 
          sort_direction={sort_direction} 
          onChangeSorting={onChangeSorting}
        />
      </div>
      <div className="pagination-wrapper">
        <Pagination 
          baseUrl="/projects" 
          count={count} 
          limit={limit} 
          offset={offset} 
          onChangePage={onChangePage} 
        />
      </div>
    </div>
  );
};

ProjectsListPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeSorting: PropTypes.func.isRequired
};

export default ProjectsListPage;