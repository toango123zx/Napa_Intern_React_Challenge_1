import React, { useEffect, useState } from 'react'
import { GoStarFill } from "react-icons/go";
import './style.scss'
import { geTMovieDetail } from '../../services'
import { TMovieDetail } from '../../types'
import { Header } from '../../components/header';
import { getMovie } from '../../apis/movie.api';
import { useParams } from 'react-router-dom';

export const DetailMovie = () => {
  const { movieId } = useParams()
  const [movie, seTMovieDetail] = useState<TMovieDetail>({} as TMovieDetail);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovie(String(movieId));
      seTMovieDetail(movie);
    }
    fetchMovie();
  }, [])

  return (
    <div className='detail__background--gray'>
      <Header />
      <div className='detail'>
        <div className='detail__container'>
          <div className='detail__img'>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className='detail__content'>
            <div className='detail__title'>
              <p className='detail__title'>{movie.Title}</p>
              <div className='detail__rating'>
                <GoStarFill className='detail__icon--star' />
                <div>
                  <div>
                    <span className='detail__number-rating'>{movie.imdbRating}</span>
                    <span><i>/10</i></span>
                  </div>
                  <p>{movie.imdbVotes}</p>
                </div>
              </div>
            </div>
            <div className='detail__release'>
              <p>{movie.Year}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Released}</p>
              <p>{movie.Runtime}</p>
            </div>
            <div className='detail__plot'>
              <p>{movie.Plot}</p>
            </div>
            <div className='detail__information'>
              <div className='box__content'>
                <h3>Genre :</h3>
                <p>{movie.Genre}</p>
              </div>
              <div className='box__content'>
                <h3>Director :</h3>
                <p>{movie.Director}</p>
              </div>
              <div className='box__content'>
                <h3>Actors :</h3>
                <p>{movie.Actors}</p>
              </div>
              <div className='box__content'>
                <h3>Language :</h3>
                <p>{movie.Language}</p>
              </div>
              <div className='box__content'>
                <h3>Director:</h3>
                <p>{movie.Director}</p>
              </div>
              <div className='box__content'>
                <h3>Country :</h3>
                <p>{movie.Country}</p>
              </div>
              <div className='box__content'>
                <h3>Awards :</h3>
                <p>{movie.Awards}</p>
              </div>
              <div className='box__content'>
                <h3>Production :</h3>
                <p>{movie.Production}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
