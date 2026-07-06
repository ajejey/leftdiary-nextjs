import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Why Is Housing So Expensive? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'Why Is Housing So Expensive?',
    hook: "CAN'T AFFORD A HOUSE",
    icon: 'house',
    tone: 'red',
  });
}
