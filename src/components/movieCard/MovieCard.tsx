import React from 'react'
import { TMovie } from '../../types'
import { MdCalendarToday } from 'react-icons/md'
import { IoHeart } from 'react-icons/io5'
import './style.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  movie: TMovie,
  isLoading: boolean,
}

export const MovieCard = ({ movie, isLoading }: Props) => {
  return (
    <div className='movie-card'>
      <div className='movie-card__poster'>
        <button>
          <Link to={`/${movie.imdbID}`}>
            <div>
              <div className='movie-card__coating'></div>
              {
                isLoading ? (
                  <div className='loading__img-wrap'>
                    <Skeleton className='loading__img' baseColor='#171717' />
                  </div>
                ) : (
                  <img src={movie.Poster} alt={movie.Title} />
                )
              }
            </div>
            <h2>{isLoading ? <Skeleton className='loading__background--gray' /> : movie.Title}</h2>
          </Link>
        </button>
      </div>

      <div className='movie-card__background--black movie-card__container'>
        <div className='movie-card__content'>
          {
            isLoading ? (
              <Skeleton className='movie-card__icon--calender loading__background--gray loading__icon' />
            ) : (

              <MdCalendarToday className='movie-card__icon--calender' />
            )
          }
          <p>{isLoading ? <Skeleton className='loading__year' /> : movie.Year}</p>
        </div>
        <button>
          {
            isLoading ? (
              <Skeleton className='movie-card__icon--heart loading__background--gray loading__icon' />
            ) : (
              <IoHeart className='movie-card__icon--heart' />
            )
          }
        </button>
      </div>
    </div>
  )
}
