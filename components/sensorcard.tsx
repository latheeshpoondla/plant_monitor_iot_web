type Props = {
  title: string;
  value: string | number;
  unit: string;
  color: string;
};

export default function SensorCard({ title, value, unit, color }: Props) {
  return (
    <div className={`p-5 rounded-2xl shadow-md text-white ${color}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">
        {value} {unit}
      </p>
    </div>
  );
}
