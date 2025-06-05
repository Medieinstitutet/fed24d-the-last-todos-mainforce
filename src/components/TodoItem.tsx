import type { Todo } from '../models/ITodo';
import { TodoActions } from './TodoActions';
import { PriorityLabel } from './PriorityLabel';

interface TodoItemProps {
  todo: Todo;
  onMarkDone: (id: number) => void;
  onRemove: (id: number) => void;
}

export const TodoItem = ({ todo, onMarkDone, onRemove }: TodoItemProps) => {
  return (
    <li
      className={`
  flex flex-col justify-between
  p-4 rounded-lg shadow-md
  transition-shadow duration-200
  ${todo.done ? 'bg-green-100' : 'bg-gray-100'}
  hover:shadow-lg
  min-h-[160px]
  mb-4
`}
    >
      <div>
        <p
          className={`text-sm font-semibold mb-1 ${
            todo.done ? 'text-green-700' : 'text-gray-600'
          }`}
        >
          {todo.done ? 'Klar!' : 'Pågående'}
        </p>

        <h3
          className={`text-lg font-bold mb-1 ${
            todo.done ? 'line-through text-gray-500' : 'text-gray-900'
          }`}
        >
          {todo.title}
        </h3>
        <div className="text-sm text-gray-500 space-x-4">
          <span>
            Prioritet: <PriorityLabel priority={todo.priority} />
          </span>
          <span>
            Kategori: <strong>{todo.category}</strong>
          </span>
        </div>
      </div>

      <TodoActions
        done={todo.done}
        onMarkDone={() => onMarkDone(todo.id)}
        onRemove={() => onRemove(todo.id)}
      />
    </li>
  );
};
