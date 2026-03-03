"use client";

interface SectionProps {
  title: string;
  actionText?: string;
  onAction?: () => void;
  children: React.ReactNode;
}

export default function Section({
  title,
  actionText,
  onAction,
  children,
}: SectionProps) {
  return (
    <div className="mt-8 border-t border-gray-800 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-base">{title}</h2>

        {actionText && (
          <button
            onClick={onAction}
            className="text-green-500 text-sm hover:text-green-400 transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
