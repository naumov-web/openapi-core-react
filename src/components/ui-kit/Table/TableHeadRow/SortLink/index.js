/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../../../../public/images/arrow-thin.svg';
import './styles.styl';

const SortLink = ({ is_active, column, current_column, current_direction, onClick}) => {
  const onClickLink = () => {
    onClick(
      {
        sort_by: column,
        // eslint-disable-next-line no-nested-ternary
        sort_direction: (current_column === column) ? 
        (current_direction === 'asc' ? 'desc' : 'asc') : 
        'asc'
      }
    );
  };
  const is_desc = (current_column === column) && (current_direction === 'asc');
  const classNames = cn({
    "sort-link": true,
    "sort-link_asc": !is_desc,
    "sort-link_desc": is_desc,
    "sort-link_active": is_active
  });

  return (
    <Link className={classNames} onClick={onClickLink}>
      <ArrowIcon height="12px" fill="#000" />
    </Link>
  );
};

SortLink.propTypes = {
  is_active: PropTypes.bool.isRequired,
  column: PropTypes.string.isRequired,
  current_column: PropTypes.string.isRequired,
  current_direction: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

SortLink.defaultProps = {
  current_direction: null
};

export default SortLink;