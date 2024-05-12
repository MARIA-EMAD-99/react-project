import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './../axios/instanc';

const Product = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axiosInstance.get(`/${productID}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productID]);

  if (Object.keys(product).length === 0) { // Check if product is an empty object
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: 40 }}>
        <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
