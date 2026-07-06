import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'How Did People Survive Before Capitalism? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'How Did People Survive Before Capitalism?',
    hook: '5,200 ACTS',
    icon: 'fence',
  });
}
