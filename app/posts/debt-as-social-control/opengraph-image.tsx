import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'How Does Debt Keep People In Line? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'How Does Debt Keep People In Line?',
    hook: 'PUNISHED FOR WINNING',
    icon: 'chain',
    tone: 'red',
  });
}
