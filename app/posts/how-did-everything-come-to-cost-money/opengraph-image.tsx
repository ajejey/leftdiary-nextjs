import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'How Did Everything Come to Cost Money? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'How Did Everything Come to Cost Money?',
    hook: 'ONE LAW AT A TIME',
    icon: 'fence',
  });
}
