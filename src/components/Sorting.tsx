interface SortSelectorProps {
  sortOrder: 'default' | 'priority' | 'title';
  onSortChange: (newSort: 'default' | 'priority' | 'title') => void;
}

export const Sorting = ({ sortOrder, onSortChange }: SortSelectorProps) => {
  return (
    <label className="flex items-center space-x-2 text-gray-700 font-medium">
      <span>Sortera efter:</span>
      <select
        className="block w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
        value={sortOrder}
        onChange={(e) =>
          onSortChange(e.target.value as 'default' | 'priority' | 'title')
        }
      >
        <option value="default">Standard</option>
        <option value="priority">Prioritet (hög → låg)</option>
        <option value="title">Titel (A → Ö)</option>
      </select>
    </label>
  );
};
