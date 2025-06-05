import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold text-black-300 mt-8 mb-8 uppercase">
        Innan sommarledighet:
      </h2>
      <TodoList />
    </>
  );
}

export default App;
