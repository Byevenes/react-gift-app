import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputVale, setInputVale] = useState('');

  const handelInputChange = (e) => {
    setInputVale(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVale.trim().length > 2) {
      setCategories((categories) => [inputVale, ...categories]);
      setInputVale('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVale} onChange={handelInputChange} />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
