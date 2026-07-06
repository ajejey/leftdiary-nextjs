import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Who Owns the Media? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'Who Owns the Media?',
    hook: 'FAKE NEWS',
    icon: 'megaphone',
  });
}
