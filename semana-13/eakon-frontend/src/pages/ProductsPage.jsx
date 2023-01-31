import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
import { fetchReadProducts } from "../redux/thunks/productsThunk";
// import ContactHero from "../components/contact/ContactHero";

const ProductsPage = () => {
  const dispatch = useDispatch();
  // const { loading, contactData } = useContact();

  useEffect(() => {
    document.title = '¡Productos! I EAKON';
    console.log('Comida');
    dispatch(fetchReadProducts());
  }, []);

  return (
    <>
      {false && <LoadersModal />}
      {/* <ContactHero contactData={contactData} /> */}
      {/* <ContactMeans /> */}
    </>
  );
};
export default ProductsPage;