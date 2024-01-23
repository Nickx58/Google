import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "inc" | "dec";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;
const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === "inc") {
    return {
      count: state.count + action.payload,
    };
  } else if (action.type === "dec") {
    return {
      count: state.count - action.payload,
    };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return state;
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
        Inc 10
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
        Dec 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
