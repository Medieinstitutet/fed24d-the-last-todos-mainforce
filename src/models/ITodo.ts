export interface Todo {
  id: number;
  title: string;
  done: boolean;
  highImportance: boolean;
  priority: number;
  category: 'Skola' | 'Fritid';
}
