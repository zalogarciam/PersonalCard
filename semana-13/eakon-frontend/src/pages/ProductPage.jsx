import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    console.log(slug);
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
