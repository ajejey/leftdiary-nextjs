import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { COVER_ICON_PATHS, COVER_BRASS, COVER_RED, COVER_PAPER } from '@/components/blog/coverIcons';
import type { CoverIcon, CoverTone } from '@/components/blog/coverIcons';

export const OG_SIZE = { width: 1200, height: 630 };

let fonts: { serif: Buffer; sans: Buffer } | null = null;
function loadFonts() {
  if (!fonts) {
    const dir = join(process.cwd(), 'lib/og/fonts');
    fonts = {
      serif: readFileSync(join(dir, 'SourceSerif4-Bold.ttf')),
      sans: readFileSync(join(dir, 'Inter-SemiBold.ttf')),
    };
  }
  return fonts;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

interface RenderCoverImageOptions {
  title: string;
  hook: string;
  icon?: CoverIcon;
  tone?: CoverTone;
}

// Static-pixel counterpart of GeneratedCover.tsx, rendered at build time via
// next/og for use as each article's opengraph-image. Satori (which powers
// ImageResponse) doesn't support container query units, so every size here
// is a fixed px value tuned to look like the cqw-based on-page version at
// the standard 1200x630 share-image size.
export async function renderCoverImage({ title, hook, icon = 'coin', tone = 'brass' }: RenderCoverImageOptions) {
  const accent = tone === 'red' ? COVER_RED : COVER_BRASS;
  const { serif, sans } = loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'relative',
          background: 'linear-gradient(150deg, #14171C 0%, #0B0D10 60%, #000000 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            color: accent,
            opacity: 0.18,
            width: '70%',
            height: '80%',
            right: '-8%',
            bottom: '-13%',
            transform: 'rotate(-8deg)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1} width="100%" height="100%">
            {COVER_ICON_PATHS[icon]}
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '76px 72px 62px' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Source Serif 4',
              fontWeight: 700,
              color: accent,
              fontSize: 132,
              lineHeight: 0.98,
              letterSpacing: '-1px',
              marginBottom: 30,
            }}
          >
            {hook}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <div style={{ display: 'flex', width: 34, height: 34, borderRadius: '50%', background: accent }} />
            <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 600, color: COVER_PAPER, fontSize: 42 }}>
              {truncate(title, 62)}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Source Serif 4', data: serif, weight: 700, style: 'normal' },
        { name: 'Inter', data: sans, weight: 600, style: 'normal' },
      ],
    }
  );
}
