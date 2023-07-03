import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Home/Banner';
// import Banner1 from './Components/Home/Banner1';
// import Contact from "../Screens/Contact.js";
import PopularMovies from '../Components/Home/PopularMovies';
import Promos from '../Components/Home/Promos';
import TopRated from '../Components/Home/TopRated';
import Layout from '../Layout/Layout';
import Testimonials from "../Components/Home/Testimonials";
import Sliders from "../Components/Home/Sliders";
import ContactForm from "../Components/Home/ContactForm";

import {
  getAllMoviesAction,
  getRandomMoviesAction,
  getTopRatedMovieAction,
} from '../Redux/Actions/MoviesActions';

function HomeScreen() {
  const dispatch = useDispatch();
  // useSelectors
  const {
    isLoading: randomLoading,
    isError: randomError,
    movies: randomMovies,
  } = useSelector((state) => state.getRandomMovies);
  const {
    isLoading: topLoading,
    isError: topError,
    movies: topMovies,
  } = useSelector((state) => state.getTopRatedMovie);
  const { isLoading, isError, movies } = useSelector(
    (state) => state.getAllMovies
  );

  // useEffect
  useEffect(() => {
    // get random movies
    dispatch(getRandomMoviesAction());
    // get all movies
    dispatch(getAllMoviesAction({}));
    // get top rated movies
    dispatch(getTopRatedMovieAction());
  }, [dispatch]);

  // erorrs
  useEffect(() => {
    if (isError || randomError || topError) {
      toast.error('Something went wrong!');
    }
  }, [isError, randomError, topError]);

  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner movies={movies} isLoading={isLoading} />
            <TopRated movies={topMovies} isLoading={topLoading} />

        <PopularMovies movies={randomMovies} isLoading={randomLoading} />
        <Promos />
    <Testimonials />
    <Sliders />
    <ContactForm/>
        {/* <div>
        <Contact /></div> */}
      </div>
    </Layout>
  );
}

export default HomeScreen;
