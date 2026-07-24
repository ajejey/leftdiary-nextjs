import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'How Did the King Lose the Power to Make Money? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'How Did the King Lose the Power to Make Money?',
    hook: '£1.2 MILLION',
    icon: 'bank',
    tone: 'red',
  });
}
