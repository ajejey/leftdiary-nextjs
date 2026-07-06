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

export const COVER_BRASS = '#D7AC3F';
export const COVER_RED = '#C1685F';
export const COVER_PAPER = '#F2EFE9';

// Hand-drawn line icons, same stroke weight, used as large low-opacity
// watermarks behind the hook text. Kept abstract on purpose: at 16% opacity
// they read as texture first, subject second. Shared between the on-page
// GeneratedCover component and the static opengraph-image renderer so both
// stay visually identical.
// Multi-element icons use <g> rather than a fragment: satori (the renderer
// behind next/og's ImageResponse, used for the static opengraph-image
// versions of these) can't resolve a React Fragment as an SVG child.
export const COVER_ICON_PATHS: Record<CoverIcon, ReactNode> = {
  coin: (
    <g>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M12 7v10M9 9.8c0-1.3 1.2-2.3 3-2.3s3 .9 3 2c0 2.7-6 1.6-6 4.3 0 1.1 1.3 2 3 2s3-1 3-2.2" />
    </g>
  ),
  fence: <path d="M5 3h14M5 21h14M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />,
  ship: <path d="M12 2v10M7 22l5-5 5 5M3 11l9 3.5L21 11M5 7l7 2.5L19 7" />,
  bank: (
    <g>
      <rect x="2.5" y="6" width="19" height="12" rx="1.6" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M5.5 6V4M18.5 6V4" />
    </g>
  ),
  trade: <path d="M12 3v9M8 21l4-4 4 4M4 12l8 3 8-3M6 9l6 2 6-2" />,
  scale: (
    <path d="M12 3v3M12 6l-6 3.5M12 6l6 3.5M4 9.5l2 5a2.2 2.2 0 0 0 4 0l2-5M14 9.5l2 5a2.2 2.2 0 0 0 4 0l2-5M12 17v4M8 21h8" />
  ),
  house: <path d="M4 11l8-6 8 6M6 10v9h12v-9" />,
  chain: (
    <g>
      <rect x="3" y="9" width="10" height="6" rx="3" />
      <rect x="11" y="9" width="10" height="6" rx="3" />
    </g>
  ),
  crown: <path d="M3 18h18M4 18l1.2-9L9 12l3-6 3 6 3.7-3L20 18" />,
  megaphone: (
    <g>
      <path d="M3 10v4h3l7 4V6l-7 4H3z" />
      <path d="M17 9a4 4 0 0 1 0 6M19.5 7a7.5 7.5 0 0 1 0 10" />
    </g>
  ),
  hammer: <path d="M15 4l5 5-3 3-5-5zM12.5 8.5L4 17v3h3l8.5-8.5" />,
};
