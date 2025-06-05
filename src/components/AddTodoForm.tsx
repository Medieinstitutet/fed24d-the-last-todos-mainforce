import { useState } from 'react';
import type { Todo } from '../models/ITodo';

interface AddTodoFormProps {
  onAdd: (todo: Todo) => void;
  onCancel: () => void;
}

const priorityLabels: Record<number, string> = {
  5: 'Hög',
  4: 'Medelhög',
  3: 'Medel',
  2: 'Låg',
  1: 'Lägsta',
};

export const AddTodoForm = ({ onAdd, onCancel }: AddTodoFormProps) => {
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState(1);
  const [newCategory, setNewCategory] = useState<'Plugg' | 'Övrigt' | 'Jobb'>(
    'Plugg'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      title: newTitle,
      done: false,
      priority: newPriority,
      category: newCategory,
    };

    onAdd(newTodo);
    setNewTitle('');
    setNewPriority(1);
    setNewCategory('Övrigt');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-xl shadow-md mb-5"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Vad behöver göras?
        </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Skriv din todo..."
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Prioritet
        </label>
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {[5, 4, 3, 2, 1].map((priority) => (
            <option key={priority} value={priority}>
              {priorityLabels[priority]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kategori
        </label>
        <select
          value={newCategory}
          onChange={(e) =>
            setNewCategory(e.target.value as 'Plugg' | 'Övrigt' | 'Jobb')
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Plugg">Plugg</option>
          <option value="Övrigt">Övrigt</option>
          <option value="Jobb">Jobb</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          Dölj
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          Lägg till
        </button>
      </div>
    </form>
  );
};
