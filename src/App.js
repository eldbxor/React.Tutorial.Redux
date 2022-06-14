import Todos from './containers/Todos';
import Counter from './coponents/Counter';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
