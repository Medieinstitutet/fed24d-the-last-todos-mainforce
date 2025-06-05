// components/PriorityLabel.tsx
interface Props {
  priority: number;
}

const labels: Record<number, string> = {
  5: 'Hög',
  4: 'Medelhög',
  3: 'Medel',
  2: 'Låg',
  1: 'Lägsta',
};

const colors: Record<number, string> = {
  5: 'text-red-600',
  4: 'text-orange-700',
  3: 'text-orange-400',
  2: 'text-green-600',
  1: 'text-green-800',
};

export const PriorityLabel = ({ priority }: Props) => (
  <strong className={colors[priority] || 'text-gray-600'}>
    {labels[priority] || 'Okänd'}
  </strong>
);
