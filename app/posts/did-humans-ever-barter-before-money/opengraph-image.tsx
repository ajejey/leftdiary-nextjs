import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Did Humans Ever Barter Before Money? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'Did Humans Ever Barter Before Money?',
    hook: 'ZERO EVIDENCE',
    icon: 'trade',
  });
}
