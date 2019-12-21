/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Table from '../../../../../ui-kit/Table';
import TableHead from '../../../../../ui-kit/Table/TableHead';
import TableHeadRow from '../../../../../ui-kit/Table/TableHeadRow';
import TableBody from '../../../../../ui-kit/Table/TableBody';
import TableBodyRows from '../../../../../ui-kit/Table/TableBodyRows';
import EditLinkButton from '../../../../../ui-kit/EditLinkButton';
import DeleteButton from '../../../../../ui-kit/DeleteButton';

const columns = [
  {
    title: 'Id',
    name: 'id',
    sorting: true
  },
  {
    title: 'Наименование',
    name: 'name',
    sorting: true
  },
  {
    title: 'Формат',
    name: 'format_name'
  },
  {
    title: '',
    render: ({ item }) => {
      return <EditLinkButton link={`/projects/${item.id}`} text="Редактировать" />
    }
  },
  {
    title: '',
    render: () => {
      const onClick = () => {};
      return <DeleteButton onClick={onClick} text="Удалить" />
    }
  }
];

const ProjectsTable = ({ items, sort_by, sort_direction, onChangeSorting }) => {
  return (
    <Table fullWidth>
      <TableHead>
        <TableHeadRow 
          columns={columns} 
          sort_by={sort_by} 
          sort_direction={sort_direction} 
          onChangeSorting={onChangeSorting}
        />
      </TableHead>
      <TableBody>
        <TableBodyRows columns={columns} items={items} />
      </TableBody>
    </Table>
  );
};

ProjectsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired, 
  sort_by: PropTypes.string, 
  sort_direction: PropTypes.string, 
  onChangeSorting: PropTypes.func.isRequired
};

ProjectsTable.defaultProps = {
  sort_by: null,
  sort_direction: null,
};

export default ProjectsTable;