import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Paging({ currentPage, totalPages, updatePage }) {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: Arial;
  `;

  const Button = styled.button`
    width: 100px;
    padding: .5em;
    border-color: black;
    background: linear-gradient(red, white);
    color: white;
  `;

  return (
    <Nav>
      <Button onClick={() => updatePage(currentPage - 1)} disabled={currentPage === 1}>{'<<'}</Button>
      Page {currentPage} of {totalPages}
      <Button onClick={() => updatePage(currentPage + 1)} disabled={currentPage === totalPages}>{'>>'}</Button>
    </Nav>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};
