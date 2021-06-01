import React, { useReducer } from 'react';
import { INCREMENT, DECREMENT, CHANGE_TEXT } from './types';

const reducer = (state, action) => {
  console.log(state);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case CHANGE_TEXT:
      return { ...state, text: action.payload };

    default:
      return { ...state };
  }
};

const initialState = { count: 0, text: 'hello' };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [count, setCount] = useState(0);

  const { count, text } = state;

  // incrementer la variable count
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const handleTextchange = (e) => {
    // call lapi
    dispatch({ type: CHANGE_TEXT, payload: e.target.value });
  };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };
  return (
    <div style={container}>
      <div>
        <h4 style={counter}>{count}</h4>
      </div>
      <div style={box}>
        <button style={btnIncrement} onClick={increment}>
          {' '}
          increment
        </button>
        <button style={btnDecrement} onClick={decrement}>
          {' '}
          decrement
        </button>
      </div>

      <div style={{ ...box, padding: 20, justifyContent: 'start' }}>
        <input type="text" name="nom" id="" onChange={handleTextchange} />
        <p>{text}</p>
      </div>
    </div>
  );
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
};

const btnIncrement = {
  border: 'none',
  padding: '1rem',
  background: '#FF7F50',
  fontSize: '1.4rem',
  cursor: 'pointer',
  color: '#fff',
};

const btnDecrement = {
  ...btnIncrement,
  background: '#0A6FD3',
};
const box = {
  width: '60rem',
  display: 'flex',
  justifyContent: 'space-between',
};
const counter = {
  fontSize: 40,
};

export default Counter;
