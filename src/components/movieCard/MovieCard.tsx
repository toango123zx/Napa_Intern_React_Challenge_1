import React from 'react'
import { TMovie, TMovieDetail } from '../../types'
import { MdCalendarToday } from 'react-icons/md'
import { IoHeart } from 'react-icons/io5'
import './style.scss'
import { Link } from 'react-router-dom'

type Props = {
  movie: TMovie
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className='movie-card'>
      <div className='movie-card__poster'>
        <button>
          <Link to={`/${movie.imdbID}`}>
            <div>
              <div className='movie-card__coating'></div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <h2>{movie.Title}</h2>
          </Link>
        </button>
      </div>
      <div className='movie-card__background--black movie-card__container'>
        <div className='movie-card__content'>
          <MdCalendarToday className='movie-card__icon--calender' />
          <p>{movie.Year}</p>
        </div>
        <button>
          <IoHeart className='movie-card__icon--heart' />
        </button>
      </div>
    </div>
  )
}
