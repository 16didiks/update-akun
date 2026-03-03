interface SectionProps {
  title: string;
  actionText?: string;
  children: React.ReactNode;
}

export default function Section({ title, actionText, children }: SectionProps) {
  return (
    <div className="mt-8 border-t border-gray-800 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-base">{title}</h2>
        {actionText && (
          <button className="text-green-500 text-sm">{actionText}</button>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
