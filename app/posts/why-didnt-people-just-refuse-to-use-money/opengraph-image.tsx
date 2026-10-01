import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Is Money: Part 2 — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Is Money: Part 2',
    hook: 'What Is Money:\nPart 2',
    subtext: 'The commons, the enclosure acts, and the vagrancy laws',
    icon: 'coin',
    tone: 'brass',
  });
}
