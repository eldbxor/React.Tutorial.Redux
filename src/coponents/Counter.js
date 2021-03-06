const Counter = ({ number, onIncrease, onDescrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDescrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
