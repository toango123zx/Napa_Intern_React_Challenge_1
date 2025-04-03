import './style.scss'
import { Header } from '../../components/header'
import { IoMdSearch } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import { TMovie } from '../../types';
import { MovieCard } from '../../components';
import axios from 'axios';
import { DOMAIN } from '../../constants';
import { getLisMovie, getMoviesByTitle } from '../../apis/movie.api';

export const Home = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchTitle = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getLisMovie(1)
      setMovies(movies);
    }

    fetchMovies();
    setIsLoading(true);
  }, [])

  const handlerSearchClick = async (title: string) => {
    const featchMovies = async () => {
      const movies = await getMoviesByTitle(title)
      setMovies(movies)
      searchTitle.current!.value = ''
    }

    featchMovies();
  }

  return (
    <div className='home'>
      <Header />
      <div className='home__background--gray'>
        <div className="home__wrap">
          <div className='home__search--wrap'>
            <div className='home__search'>
              <div>
                <input ref={searchTitle} type="text" placeholder='Search for movie' />
              </div>
              <button><span><IoMdSearch onClick={() => handlerSearchClick(String(searchTitle.current?.value))} className='home__icon--search' /></span></button>
            </div>
          </div>
          <div className='home__content'>
            {
              movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} isLoading={isLoading} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
