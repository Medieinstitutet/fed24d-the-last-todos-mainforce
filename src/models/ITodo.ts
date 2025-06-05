export interface Todo {
  id: number;
  title: string;
  done: boolean;
  priority: number;
  category: 'Plugg' | 'Övrigt' | 'Jobb';
}
