export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {index && (
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary">{index}</span>
      )}
      <span className="eyebrow">{children}</span>
    </div>
  );
}