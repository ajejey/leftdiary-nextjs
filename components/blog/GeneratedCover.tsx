import { COVER_ICON_PATHS, COVER_BRASS as BRASS, COVER_RED as RED, COVER_PAPER as PAPER } from './coverIcons';
import type { CoverIcon, CoverTone } from './coverIcons';

export type { CoverIcon, CoverTone };

function deriveHook(title: string): string {
  return title.split(' ').slice(0, 3).join(' ').toUpperCase();
}

interface GeneratedCoverProps {
  title: string;
  // Accepted for callers that pass it, but currently unused: the card's own
  // category tags already render elsewhere, so repeating them here just
  // collides with badges positioned over the image (e.g. PostCard's
  // "Article" pill).
  categories?: string[];
  // Short, curated punchline for the cover (e.g. "THE HUT TAX"). Falls back
  // to the first few words of the title when not supplied.
  hook?: string;
  icon?: CoverIcon;
  tone?: CoverTone;
  className?: string;
  // Skip the hook/title text for small thumbnails where it wouldn't be
  // legible; show only the watermark icon, centered and larger.
  compact?: boolean;
}

// Deterministic, code-generated cover used whenever a post has no real
// image file. Styled like a YouTube thumbnail: a huge one- or two-word
// hook fills the frame, a large low-opacity icon fills what would
// otherwise be dead space, and the full title sits in a single tight line
// underneath.
export function GeneratedCover({
  title,
  className = '',
  compact = false,
  hook,
  icon = 'coin',
  tone = 'brass',
}: GeneratedCoverProps) {
  const accent = tone === 'red' ? RED : BRASS;
  const displayHook = hook ?? deriveHook(title);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(150deg, #14171C 0%, #0B0D10 60%, #000 100%)',
        containerType: 'inline-size',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(150deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)',
        }}
      />

      <div
        className="absolute"
        style={
          compact
            ? {
                color: accent,
                opacity: 0.5,
                width: '56%',
                height: '56%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }
            : {
                color: accent,
                opacity: 0.16,
                width: '78%',
                height: '78%',
                right: '-12%',
                bottom: '-14%',
                transform: 'rotate(-8deg)',
              }
        }
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1} className="w-full h-full">
          {COVER_ICON_PATHS[icon]}
        </svg>
      </div>

      {!compact && (
        <div className="relative z-10 flex flex-col justify-end h-full" style={{ padding: '6.5cqw 6cqw 5.5cqw' }}>
          <div
            style={{
              fontFamily: 'Georgia, "Iowan Old Style", "Times New Roman", serif',
              fontWeight: 700,
              color: accent,
              fontSize: '11.5cqw',
              lineHeight: 0.98,
              letterSpacing: '-0.01em',
              marginBottom: '2.6cqw',
              textWrap: 'balance',
            }}
          >
            {displayHook}
          </div>
          <div className="flex items-center" style={{ gap: '2.4cqw' }}>
            <span
              className="flex-shrink-0 rounded-full"
              style={{ width: '3.4cqw', height: '3.4cqw', background: accent }}
            />
            <span
              style={{
                color: PAPER,
                fontWeight: 600,
                fontSize: '3.6cqw',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
