import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'How Do Banks Create Money Out of Nothing? — Left Diary';

export default async function Image() {
  return renderCoverImage({
    title: 'How Do Banks Create Money Out of Nothing?',
    hook: 'OUT OF THIN AIR',
    icon: 'bank',
  });
}
