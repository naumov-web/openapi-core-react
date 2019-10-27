import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Label = ({ text, htmlForm }) => {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label className="form-label" htmlForm={htmlForm}>{ text }</label>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired
};

Label.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  htmlFor: ''
};

export default Label;