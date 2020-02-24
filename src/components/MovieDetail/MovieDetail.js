import React from 'react';
import './MovieDetail.scss';

const MovieDetail = ({
  currentMovie: { title, poster_path, overview } = '',
  current,
  toggleHidden,
  isHidden
}) => {

  return (
    <>
      {title && (
        <div className='movie-detail' onClick={()=> toggleHidden(!isHidden)}>
          <div className='box center'>
            <div className='container'>
              <p className='title-text'>{title}</p>
              <img
                className='poster'
                alt={title}
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              />
              <p className='overview-text'>{overview}</p>
              <img
              alt='close icon'
              className='close-icon'
              src='https://img.icons8.com/carbon-copy/100/000000/close-window.png'

            />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
