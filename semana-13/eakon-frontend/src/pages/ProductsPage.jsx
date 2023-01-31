import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
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
    <>
    {loading && <LoadersModal />}
    <ul>
      {products.map(element => <li>{element.attributes.nombre}</li>)}
    </ul>
    {/* <ContactHero contactData={contactData} /> */}
    {/* <ContactMeans /> */}
  </>
  );
};
export default ProductsPage;
