// components/TodoActions.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faRotateLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  done: boolean;
  onMarkDone: () => void;
  onRemove: () => void;
}

export const TodoActions = ({ done, onMarkDone, onRemove }: Props) => (
  <div className="flex justify-center space-x-3">
    <button
      onClick={onMarkDone}
      className={`w-10 h-10 rounded-full transition-colors flex items-center justify-center ${
        done
          ? 'bg-yellow-400 text-white hover:bg-yellow-500'
          : 'bg-green-500 text-white hover:bg-green-800'
      }`}
    >
      <FontAwesomeIcon icon={done ? faRotateLeft : faCheck} />
    </button>

    <button
      onClick={onRemove}
      className="w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center justify-center"
      aria-label="Ta bort todo"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);
