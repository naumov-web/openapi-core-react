import React from 'react';
// Components
import Table from '../../../../../ui-kit/Table';
import TableHead from '../../../../../ui-kit/Table/TableHead';
import TableHeadRow from '../../../../../ui-kit/Table/TableHeadRow';
import TableBody from '../../../../../ui-kit/Table/TableBody';
import TableBodyRows from '../../../../../ui-kit/Table/TableBodyRows';

const columns = [
  {
    title: 'Id',
    name: 'id'
  },
  {
    title: 'Наименование',
    name: 'name'
  },
  {
    title: 'Формат',
    name: 'format_name'
  },
  {
    title: ''
  },
  {
    title: ''
  }
];

const ProjectsTable = ({ items }) => {
  return (
    <Table fullWidth>
      <TableHead>
        <TableHeadRow columns={columns} />
      </TableHead>
      <TableBody>
        <TableBodyRows columns={columns} items={items} />
      </TableBody>
    </Table>
  );
};

export default ProjectsTable;