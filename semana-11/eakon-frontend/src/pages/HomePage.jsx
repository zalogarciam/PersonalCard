import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeHero from "../components/home/HomeHero";
import useHome from "../hooks/useHome";
import { fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const { heroProducts } = useHome();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
  }, []);

  return <HomeHero heroProducts={heroProducts} />;
};

export default HomePage;
