import React, { useEffect, useState } from 'react'
import { GoStarFill } from "react-icons/go";
import './style.scss'
import { TMovieDetail } from '../../types'
import { Header } from '../../components/header';
import { getMovie } from '../../apis/movie.api';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const DetailMovie = () => {
  const { movieId } = useParams()
  const [movie, seTMovieDetail] = useState<TMovieDetail>({} as TMovieDetail);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovie(String(movieId));
      seTMovieDetail(movie);
      setIsLoading(false);
    }
    fetchMovie();
  }, [])

  return (
    <div className='detail__background--gray'>
      <Header />
      <div className='detail'>
        <div className='detail__container'>
          <div className='detail__img'>
            {
              isLoading ? (
                <Skeleton width='100%' height='100%' baseColor='#171717' />
              ) : (
                <img src={movie.Poster} alt={movie.Title} />
              )
            }
          </div>
          <div className='detail__content'>
            <div className='detail__title'>
              <p>{isLoading ? < Skeleton baseColor='#171717' /> : movie.Title}</p>
              {
                isLoading ? (
                  <Skeleton baseColor='#171717' width={93} height={51} />
                ) : (
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
                )
              }

            </div>
            {
              isLoading ? (
                <></>
              ) : (
                <div className='detail__release'>
                  <p>{movie.Year}</p>
                  <p>{movie.Rated}</p>
                  <p>{movie.Released}</p>
                  <p>{movie.Runtime}</p>
                </div>
              )
            }

            <div className='detail__plot'>
              <p>{isLoading ? <Skeleton count={4} baseColor='#171717' style={{ margin: '10px 0' }} /> : movie.Plot}</p>
            </div>
            <div className='detail__information'>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : "Genre :"}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Genre}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Director :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Director}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Actors :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Actors}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Language :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Language}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Director:'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Director}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Country :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Country}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Awards :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Awards}</p>
              </div>
              <div className='box__content'>
                <h3>{isLoading ? <Skeleton baseColor='#171717' /> : 'Production :'}</h3>
                <p>{isLoading ? <Skeleton baseColor='#171717' /> : movie.Production}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
