import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onChange, value }) {
  return (
    <label>
      Find your contact
      <br />
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
