import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
  }, []);

  return <h1>HomaPage</h1>;
};

export default HomePage;
