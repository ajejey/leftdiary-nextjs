import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Why Do the Rich Keep Getting Richer? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'Why Do the Rich Keep Getting Richer?',
    hook: '$0 IN TAXES',
    icon: 'scale',
    tone: 'red',
  });
}
