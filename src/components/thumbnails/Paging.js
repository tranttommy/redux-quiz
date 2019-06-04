import React from 'react';
import PropTypes from 'prop-types';

export default function Paging({ currentPage, totalPages, updatePage }) {
  return (
    <nav>
      <button onClick={() => updatePage(currentPage - 1)} disabled={currentPage === 1}>{'<<'}</button>
      Page { currentPage } of {totalPages}
      <button onClick={() => updatePage(currentPage + 1)} disabled={currentPage === totalPages}>{'>>'}</button>
    </nav>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};
