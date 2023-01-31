import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import ProductsWrapper from "../components/products/ProductsWrapper";
import useProducts from "../hooks/useProducts";
import { fetchReadProducts } from "../redux/thunks/productsThunk";
// import ContactHero from "../components/contact/ContactHero";

const ProductsPage = () => {
  const dispatch = useDispatch();
  // const { loading, contactData } = useContact();
  const { loading, products, productsPage, productsPageSize } = useProducts();

  useEffect(() => {
    document.title = "¡Productos! I EAKON";
    dispatch(fetchReadProducts({ productsPage, productsPageSize }));
  }, []);

  return (
    <ProductsWrapper loading={loading} title="Producto">
      <ul>
        {products.map((element) => (
          <li key={element.id}>{element.attributes.nombre}</li>
        ))}
      </ul>
    </ProductsWrapper>
  );
};
export default ProductsPage;
