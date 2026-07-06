import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Is There a Ruling Class? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'Is There a Ruling Class?',
    hook: 'ITS NOT DEMOCRACY',
    icon: 'crown',
  });
}
