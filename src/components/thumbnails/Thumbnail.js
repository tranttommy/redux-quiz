import React from 'react';
import PropTypes from 'prop-types';
import '../../utilities/utilities';

export default function Thumbnail({ pokemon, url_image, _id }) {
  return (
    <>
      <h1>{pokemon.capitalize()}</h1>
      <img src={url_image} />
    </>
  );
}

Thumbnail.propTypes = {
  pokemon: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
