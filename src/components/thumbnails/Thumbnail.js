import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../../utilities/utilities';

export default function Thumbnail({ pokemon, url_image, _id }) {
  const H1 = styled.h1`
    color: crimson;
  `;

  return (
    <Link to={`/${_id}`} style={{ 'text-decoration': 'none' }}>
      <H1>{pokemon.capitalize()}</H1>
      <img src={url_image} />
    </Link>
  );
}

Thumbnail.propTypes = {
  pokemon: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
