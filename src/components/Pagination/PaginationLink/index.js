import React from 'react';
import { Link } from 'react-router-dom';

import './styles.styl';

const PaginationLink = ({ link, text, className }) => {
  return <Link className={`pagination-link ${className}`} to={link}>{ text }</Link>;
};

export default PaginationLink;