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
  // Big text on the cover. Use "\n" to force a line break. Falls back to the
  // first few words of the title when not supplied.
  hook?: string;
  // Plain descriptive line under the hook. Falls back to the title.
  subtext?: string;
  icon?: CoverIcon;
  tone?: CoverTone;
  className?: string;
  // Skip the hook/title text for small thumbnails where it wouldn't be
  // legible; show only the watermark icon, centered and larger.
  compact?: boolean;
}

// Deterministic, code-generated cover used whenever a post has no real
// image file. A large hook fills the frame, a large low-opacity icon fills
// what would otherwise be dead space, and a plain descriptive line sits
// underneath.
export function GeneratedCover({
  title,
  className = '',
  compact = false,
  hook,
  subtext,
  icon = 'coin',
  tone = 'brass',
}: GeneratedCoverProps) {
  const accent = tone === 'red' ? RED : BRASS;
  const displayHook = hook ?? deriveHook(title);
  const hookLines = displayHook.split('\n');
  const longestLine = Math.max(...hookLines.map((line) => line.length));
  // Explicit multi-line mixed-case headlines like "What Is Money:" need a
  // smaller size than the short all-caps hooks to stay inside the frame.
  // Single-line hooks keep the original size.
  const hookSize = hookLines.length > 1 && longestLine > 12 ? '9.4cqw' : '11.5cqw';

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
              fontSize: hookSize,
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              marginBottom: '2.6cqw',
              whiteSpace: 'pre-line',
              textWrap: 'balance',
            }}
          >
            {displayHook}
          </div>
          <div className="flex items-start" style={{ gap: '2.4cqw' }}>
            <span
              className="flex-shrink-0 rounded-full"
              style={{ width: '3cqw', height: '3cqw', background: accent, marginTop: '1cqw' }}
            />
            <span
              style={{
                color: PAPER,
                fontWeight: 600,
                fontSize: subtext ? '4cqw' : '3.6cqw',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: subtext ? 2 : 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {subtext ?? title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
