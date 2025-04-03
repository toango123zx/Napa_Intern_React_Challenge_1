import './style.scss'
import { Header } from '../../components/header'
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from 'react';
import { TMovie } from '../../types';
import { MovieCard } from '../../components';
import axios from 'axios';
import { DOMAIN } from '../../constants';
import { getLisMovie } from '../../apis/movie.api';

export const Home = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {

    const fetchMovies = async () => {
      const movies = await getLisMovie(1)
      console.log(`🚀 ~ Home.tsx:28 ~ fetchMovies ~ response:`, movies)
      setMovies(movies);
    }

    fetchMovies();
  }, [])

  return (
    <div className='home'>
      <Header />
      <div className='home__background--gray'>
        <div className="home__wrap">
          <div className='home__search--wrap'>
            <div className='home__search'>
              <div>
                <input type="text" placeholder='Search for movie' />
              </div>
              <button><span><IoMdSearch className='home__icon--search' /></span></button>
            </div>
          </div>
          <div className='home__content'>
            {
              movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
