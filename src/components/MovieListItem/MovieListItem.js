import React from 'react';
import './MovieListItem.scss';

const MovieListItem = (
  { title, poster, id, setCurrent, overview, toggleMovieDetail}
) => {
  return (
    <div
      className='movie-card scroll-item'
      onClick={() => {setCurrent(id)
      toggleMovieDetail(true)}}
      >
      <img alt={title} src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <p className='image-text'>{title}</p>
    </div>
  );
};

export default MovieListItem;
