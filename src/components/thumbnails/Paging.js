import React from 'react';
import PropTypes from 'prop-types';

export default function Paging({ currentPage, totalPages, updatePage }) {
  return (
    <nav>
      <button onClick={() => updatePage(currentPage - 1)}>{'<<'}</button>
      Page { currentPage } out of { totalPages }
      <button onClick={() => updatePage(currentPage + 1)}>{'>>'}</button>
    </nav>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  updatePage: PropTypes.func
};
