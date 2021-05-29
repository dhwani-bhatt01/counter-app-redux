import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const Counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {Counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Secured Information</h3> : ""}
    </div>
  );
}

export default App;
