import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReadProduct } from "../redux/thunks/productsThunk";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchReadProduct(slug));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1>{slug}</h1>
      </div>
    </section>
  );
};

export default ProductPage;
