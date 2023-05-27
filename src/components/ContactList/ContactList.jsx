import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ filteredUserList, onDeleteUser }) => {
  return (
    <ul>
      {filteredUserList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              <text>{name}</text> <text>{number}</text>
            </div>
            <button type="button" onClick={() => onDeleteUser(id)}>
              Delete Contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredUserList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};

export default ContactList;
