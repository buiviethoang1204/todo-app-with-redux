import './App.css';
import Filters from './components/Filters';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Title />
      <br/><br/>
      <Filters />
      <br/><br/>
      <TodoList />
    </>
  );
}

export default App;
