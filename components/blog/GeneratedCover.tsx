import type { ReactNode } from 'react';

export type CoverIcon =
  | 'coin'
  | 'fence'
  | 'ship'
  | 'bank'
  | 'trade'
  | 'scale'
  | 'house'
  | 'chain'
  | 'crown'
  | 'megaphone'
  | 'hammer';

export type CoverTone = 'brass' | 'red';

const BRASS = '#D7AC3F';
const RED = '#C1685F';
const PAPER = '#F2EFE9';

// Hand-drawn line icons, same stroke weight, used as large low-opacity
// watermarks behind the hook text. Kept abstract on purpose: at 16% opacity
// they read as texture first, subject second.
const ICON_PATHS: Record<CoverIcon, ReactNode> = {
  coin: (
    <>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M12 7v10M9 9.8c0-1.3 1.2-2.3 3-2.3s3 .9 3 2c0 2.7-6 1.6-6 4.3 0 1.1 1.3 2 3 2s3-1 3-2.2" />
    </>
  ),
  fence: <path d="M5 3h14M5 21h14M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />,
  ship: <path d="M12 2v10M7 22l5-5 5 5M3 11l9 3.5L21 11M5 7l7 2.5L19 7" />,
  bank: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="1.6" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 6V4M18.5 6V4" />
    </>
  ),
  trade: <path d="M12 3v9M8 21l4-4 4 4M4 12l8 3 8-3M6 9l6 2 6-2" />,
  scale: (
    <path d="M12 3v3M12 6l-6 3.5M12 6l6 3.5M4 9.5l2 5a2.2 2.2 0 0 0 4 0l2-5M14 9.5l2 5a2.2 2.2 0 0 0 4 0l2-5M12 17v4M8 21h8" />
  ),
  house: <path d="M4 11l8-6 8 6M6 10v9h12v-9" />,
  chain: (
    <>
      <rect x="3" y="9" width="10" height="6" rx="3" />
      <rect x="11" y="9" width="10" height="6" rx="3" />
    </>
  ),
  crown: <path d="M3 18h18M4 18l1.2-9L9 12l3-6 3 6 3.7-3L20 18" />,
  megaphone: (
    <>
      <path d="M3 10v4h3l7 4V6l-7 4H3z" />
      <path d="M17 9a4 4 0 0 1 0 6M19.5 7a7.5 7.5 0 0 1 0 10" />
    </>
  ),
  hammer: <path d="M15 4l5 5-3 3-5-5zM12.5 8.5L4 17v3h3l8.5-8.5" />,
};

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
          {ICON_PATHS[icon]}
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
