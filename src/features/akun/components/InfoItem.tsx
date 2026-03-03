interface Props {
  label: string;
  value: string;
}

export default function InfoItem({ label, value }: Props) {
  return (
    <div>
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
