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
  // Big text. Use "\n" to force a line break.
  hook: string;
  // Plain descriptive line under the hook. Falls back to the title.
  subtext?: string;
  icon?: CoverIcon;
  tone?: CoverTone;
}

// Static-pixel counterpart of GeneratedCover.tsx, rendered at build time via
// next/og for use as each article's opengraph-image. Satori (which powers
// ImageResponse) doesn't support container query units, so every size here
// is a fixed px value tuned to look like the cqw-based on-page version at
// the standard 1200x630 share-image size.
export async function renderCoverImage({ title, hook, subtext, icon = 'coin', tone = 'brass' }: RenderCoverImageOptions) {
  const accent = tone === 'red' ? COVER_RED : COVER_BRASS;
  const { serif, sans } = loadFonts();
  const hookLines = hook.split('\n');
  const longestLine = Math.max(...hookLines.map((line) => line.length));
  const hookSize = hookLines.length > 1 && longestLine > 12 ? 112 : 132;
  const smallText = truncate(subtext ?? title, subtext ? 96 : 62);

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
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
            {hookLines.map((line, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  fontFamily: 'Source Serif 4',
                  fontWeight: 700,
                  color: accent,
                  fontSize: hookSize,
                  lineHeight: 1.0,
                  letterSpacing: '-1px',
                }}
              >
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 22 }}>
            <div style={{ display: 'flex', flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: accent, marginTop: 11 }} />
            <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 600, color: COVER_PAPER, fontSize: subtext ? 40 : 42, lineHeight: 1.3 }}>
              {smallText}
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
