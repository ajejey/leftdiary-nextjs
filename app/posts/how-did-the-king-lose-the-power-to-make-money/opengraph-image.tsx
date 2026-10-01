import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Is Money: Part 3 — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Is Money: Part 3',
    hook: 'What Is Money:\nPart 3',
    subtext: 'How the Bank of England was founded in 1694',
    icon: 'bank',
    tone: 'red',
  });
}
