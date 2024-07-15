import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/lib/features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-xl">{count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
