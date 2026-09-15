import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Is Money: Part 5 — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Is Money: Part 5',
    hook: 'TAXED THROUGH A FAMINE',
    icon: 'fence',
    tone: 'red',
  });
}
