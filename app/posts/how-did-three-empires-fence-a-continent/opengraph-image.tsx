import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Is Money: Part 7 — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Is Money: Part 7',
    hook: 'What Is Money:\nPart 7',
    subtext: 'The hut tax, the Congo Free State, and the French indigénat',
    icon: 'chain',
    tone: 'red',
  });
}
