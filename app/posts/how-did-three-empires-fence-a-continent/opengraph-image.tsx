import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Is Money: Part 6 — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Is Money: Part 6',
    hook: 'A HAND FOR A BULLET',
    icon: 'chain',
    tone: 'red',
  });
}
