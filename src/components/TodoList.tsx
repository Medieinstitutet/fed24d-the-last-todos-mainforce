import { useState, useEffect } from 'react';
import { todos as initialTodos } from '../models/todos.ts';
import { TodoItem } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';
import { Sorting } from './Sorting';
import { AddTodoButton } from './AddTodoButton';
import type { Todo } from '../models/ITodo';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? (JSON.parse(saved) as Todo[]) : initialTodos;
  });

  const [sortOrder, setSortOrder] = useState<'default' | 'priority' | 'title'>(
    'default'
  );

  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleMarkDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setShowAddForm(false);
  };

  const handleHideForm = () => {
    setShowAddForm(false);
  };

  const getSortedTodos = () => {
    const sorted = [...todos];

    if (sortOrder === 'priority') {
      return sorted.sort((a, b) => b.priority - a.priority);
    }

    if (sortOrder === 'title') {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted; // default
  };

  return (
    <>
      <div className="mb-4">
        <Sorting sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      {!showAddForm && <AddTodoButton onClick={() => setShowAddForm(true)} />}

      {showAddForm && (
        <AddTodoForm onAdd={handleAddTodo} onCancel={handleHideForm} />
      )}

      <ul>
        {getSortedTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onMarkDone={handleMarkDone}
            onRemove={handleRemoveTodo}
          />
        ))}
      </ul>
    </>
  );
};
