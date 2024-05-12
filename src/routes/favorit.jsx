import { useSelector } from 'react-redux';

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);

  return (
    <div className="container">
      <div className="row">
        {favoriteMovies.map((movie) => ( // Use favoriteMovies.map to iterate over each favorite movie
          <div className="col-lg-3 col-md-6 mb-4" key={movie.id} style={{ marginLeft: '80px' }}>
            <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-img-top" />
              <h3 className="card-title">{movie.title}</h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesList;


