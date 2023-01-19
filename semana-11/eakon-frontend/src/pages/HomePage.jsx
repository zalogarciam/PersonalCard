import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/homeSlice";

const HomePage = () => {
  const value = useSelector((state) => state.home.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HomePage;
