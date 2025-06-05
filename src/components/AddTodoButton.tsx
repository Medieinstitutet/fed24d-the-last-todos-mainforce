import React from 'react';

interface Props {
  onClick: () => void;
}

export const AddTodoButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mb-5 w-full bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-300 transition cursor-pointer"
  >
    Lägg till ny todo
  </button>
);
