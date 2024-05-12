
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from './../axios/instanc';
import { useDispatch, useSelector } from 'react-redux';
 import { addToFavorites, removeFromFavorites } from './../Slice/slice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);


  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);

  const handleToggleFavorite = (product) => {
    if (isFavorite(product)) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const isFavorite = (product) => {
    return favoriteMovies.some(movie => movie.id === product.id);
  };

  useEffect(() => {
    axiosInstance.get(`/popular?page=${page}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.results); // Access 'results' property from the response data
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]); // Fetch products whenever page changes

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((prd) => (
          <div className="col-lg-3 col-md-6 mb-4" key={prd.id} style={{ marginLeft: '80px' }}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${prd.poster_path}`} alt={prd.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{prd.title}</h5>
                 <button onClick={() => handleToggleFavorite(prd)} className="mx-4  btn btn-success">
                {isFavorite(prd) ? '★' : '☆'}
              </button> 
                <Link to={`/product/${prd.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mb-3 ms-5">
        <button  className="btn btn-secondary" onClick={handlePrevious} disabled={page === 1}>Previous</button>
        <button className="btn btn-dark" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Products;



