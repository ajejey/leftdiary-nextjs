import { renderCoverImage, OG_SIZE } from '@/lib/og/renderCoverImage';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = "Why Didn't People Just Refuse to Use Money? — Left Diary";

export default async function Image() {
  return renderCoverImage({
    title: "Why Didn't People Just Refuse to Use Money?",
    hook: '1660s LONDON',
    icon: 'coin',
  });
}
