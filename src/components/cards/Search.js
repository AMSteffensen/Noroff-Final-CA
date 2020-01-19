import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function Search({ handleSearch, inputValue, clearInput }) {
                 return (
                   <InputGroup className='[ search ] '>
                     <FormControl
                       placeholder='Search by name...'
                       onChange={event => handleSearch(event)}
                       className='[ search__input ]'
                     />
                   </InputGroup>
                 );
               }

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
