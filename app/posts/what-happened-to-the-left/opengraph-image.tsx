import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'What Happened to the Left? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'What Happened to the Left?',
    hook: '11,000 FIRED',
    icon: 'hammer',
  });
}
