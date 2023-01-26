import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadAboutUsData } from "../redux/thunks/aboutUsThunk";
import useAboutUs from "../hooks/useAboutUs";

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const { loading, aboutUsData } = useAboutUs();

  useEffect(() => {
    document.title = "Nosotros: I EAKON";
    dispatch(fetchReadAboutUsData());
  }, []);

  return (
    <div>
      {loading && <h5>Cargando</h5>}
      <h1> Nosotros </h1>
      <h2>{aboutUsData.attributes?.nombre_empresa}</h2>
      <p>{aboutUsData.attributes?.quien}</p>
    </div>
  );
};

export default AboutUsPage;
