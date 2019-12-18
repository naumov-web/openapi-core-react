import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Components
import PaginationLink from './PaginationLink';

const Pagination = ({ count, limit, offset, onChangePage, baseUrl }) => {
  if (count <= limit) {
    return null;
  }

  const pagesCount = Math.ceil(count / limit);
  const pageNumbers = [];
  for(let i = 1; i <= pagesCount; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => {
        const url = `${ baseUrl }?limit=${ limit }&offset=${(number - 1) * limit}`;
        const classnames = cn({
          "pagination-link-first": number === 1,
          "pagination-link-last": number === pageNumbers.length
        });

        return <PaginationLink className={classnames} link={url} text={number} />;
      })}
    </div>
  );
};

Pagination.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  onChangePage: PropTypes.func
};

Pagination.defaultProps = {
  onChangePage: () => {}
};

export default Pagination;