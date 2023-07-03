import React from 'react';
import Layout from '../Layout/Layout';
import Moves from '../Components/Moves';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
// import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import Loader from '../Components/Notifications/Loader';
import { RiMovie2Line } from 'react-icons/ri';
import { getAllMoviesAction } from '../Redux/Actions/MoviesActions';
import { useParams, useNavigate } from 'react-router-dom';


function Lives() {
  const { search } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState({ title: 'All Categories' });
  const sameClass =
    'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain';
  // all movies
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.getAllMovies
  );
  // get all categories
  const { categories } = useSelector((state) => state.categoryGetAll);

  // queries
  const queries = React.useMemo(() => {
    const query = {
      category: category?.title === 'All Categories' ? '' : category?.title,
      search: search ? search : '',
    };
    return query;
  }, [category, search]);

  // useEffect
  React.useEffect(() => {
    // get all movies
    dispatch(getAllMoviesAction(queries));
  }, [dispatch, queries]);

  // pagination next and prev pages
  const nextPage = () => {
    dispatch(
      getAllMoviesAction({
        ...queries,
        pageNumber: page + 1,
      })
    );
  };
  const prevPage = () => {
    dispatch(
      getAllMoviesAction({
        ...queries,
        pageNumber: page - 1,
      })
    );
  };

  // errors
  // useEffect
  React.useEffect(() => {
    // errors
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);

  // Navigate to Watch page
  const handleMovieClick = (movieId) => {
    navigate(`/watch/${movieId}`);
  };

  return (
    <Layout>
      <div className="my-6 flex items-center">
        <h2 className="text-3xl font-semibold mb-2 ml-3 text-star animate-pulse">
          Live Games
        </h2>
        <span className="bg-green-400 h-4 w-4 rounded-full inline-block ml-2 animate-pulse animate-ping"></span>
      </div>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <p className="text-lg font-medium my-6">
          Total{' '}
          <span className="font-bold text-subMain">
            {movies ? movies?.length : 0}
          </span>{' '}
          items Found {search && `for "${search}"`}
        </p>
        {isLoading ? (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <Loader />
          </div>
        ) : movies?.length > 0 ? (
          <>
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {movies.map((watch, index) => (
                <Moves
                  key={index}
                  movie={watch}
                  onClick={() => handleMovieClick(watch.id)}
                />
              ))}
            </div>
            {/* Loading More */}
            <div className="w-full flex-rows gap-6 md:my-20 my-10">
              {/* <button
                onClick={prevPage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextPage}
                disabled={page === pages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button> */}
            </div>
          </>
        ) : (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <RiMovie2Line />
            </div>
            <p className="text-border text-sm">
              It seems like we don't have any movies.
            </p>
          </div>
        )}

        {/* Only All Categories Section */}
      </div>
    </Layout>
  );
}

export default Lives;
