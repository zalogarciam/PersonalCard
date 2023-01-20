import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeHero from "../components/home/HomeHero";
import { fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
  }, []);

  return <HomeHero />;
};

export default HomePage;
