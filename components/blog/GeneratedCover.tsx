const GRADIENTS = [
  'from-gray-800 via-gray-900 to-black',
  'from-slate-800 via-gray-900 to-black',
  'from-zinc-800 via-neutral-900 to-black',
  'from-stone-800 via-gray-900 to-black',
];

function pickVariant(title: string): number {
  let sum = 0;
  for (let i = 0; i < title.length; i++) {
    sum += title.charCodeAt(i);
  }
  return sum % GRADIENTS.length;
}

interface GeneratedCoverProps {
  title: string;
  // Accepted for callers that pass it, but currently unused: the card's own
  // category tags already render elsewhere, so repeating them here just
  // collides with badges positioned over the image (e.g. PostCard's
  // "Article" pill).
  categories?: string[];
  className?: string;
  // Skip the title text for small thumbnails where it wouldn't be legible.
  compact?: boolean;
}

// Deterministic, code-generated cover used whenever a post has no real
// image file. Keeps every article visually browsable without needing a
// sourced or hand-made image per article.
export function GeneratedCover({ title, className = '', compact = false }: GeneratedCoverProps) {
  const gradient = GRADIENTS[pickVariant(title)];

  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${gradient} ${compact ? '' : 'flex flex-col justify-end p-6'} overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 12px)',
        }}
      />
      {!compact && (
        <h3 className="relative text-white font-bold leading-tight line-clamp-4 text-lg sm:text-xl">
          {title}
        </h3>
      )}
    </div>
  );
}
