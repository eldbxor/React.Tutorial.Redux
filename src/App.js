import CounterContainer from './containers/CounterContainer';
import Todos from './containers/Todos';
import Counter from './coponents/Counter';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
