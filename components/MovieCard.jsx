import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
    <div className=''>
    </div>

    <div>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
    </div>
    
  <div>
    <span className='capitalize font-bold text-2xl opacity-40 text-white'>{movie.Type}:</span>
    <h3 className='text-white font-bold'>{movie.Title}</h3>
    <h2 className='text-white opacity-60 font-bold'>{movie.Year}</h2>

  </div>

  </div>

  )
}

export default MovieCard;