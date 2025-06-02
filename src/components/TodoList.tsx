import { todos } from '../models/todos.ts';

export const TodoList = () => {
  return (
    <>
      <h2>Innan sommarledighet:</h2>
      <ul>
        {todos.map((singleTask) => (
          <div className="singleTask">
            <li key={singleTask.id}>
              <h3>{singleTask.title}</h3>
              <p>{singleTask.done ? '(Slutförd ✓)' : '(Pågående)'}</p>
              <p>{singleTask.highImportance ? 'Viktigt!' : 'Om tid finns!'}</p>
              <p>{singleTask.priority}</p>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
