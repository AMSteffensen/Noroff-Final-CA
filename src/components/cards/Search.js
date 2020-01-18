import React from "react";
import PropTypes from "prop-types";


export default function Search({handleSearch}) {
  return (
    <form className='[ search ] '>
      <input
        type='text'
        placeholder='Search by name...'
        onChange={event => handleSearch(event)}
        className='[ search__input ]'
      />
    </form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
