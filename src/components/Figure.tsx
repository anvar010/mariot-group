import Image from 'next/image';
import { PHOTOS, photoSrc, type PhotoKey } from '@/lib/images';

type Scrim = 'none' | 'full' | 'soft';

type FigureProps = {
  photo: PhotoKey;
  /** Any CSS aspect-ratio value, e.g. '4 / 3'. Omit when the parent sets a height. */
  ratio?: string;
  /** Viewport-width hint for the srcset. Pass a real value wherever the frame is not full-bleed. */
  sizes?: string;
  priority?: boolean;
  scrim?: Scrim;
  /** Overrides the catalogue alt text — use when the photo stands in for something specific. */
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Overlay content: captions, tags, index numerals. */
  children?: React.ReactNode;
};

const SCRIM_CLASS: Record<Scrim, string> = {
  none: '',
  full: 'figure-scrim',
  soft: 'figure-scrim-soft',
};

/**
 * The single photo frame used across the site. Renders the image with its own
 * dominant colour behind it and a blur-up placeholder, so a frame never pops
 * from empty paper to full photo.
 */
export default function Figure({
  photo,
  ratio,
  sizes = '100vw',
  priority = false,
  scrim = 'none',
  alt,
  className = '',
  style,
  children,
}: FigureProps) {
  const source = PHOTOS[photo];

  return (
    <div
      className={`figure ${SCRIM_CLASS[scrim]} ${className}`.trim()}
      style={{ aspectRatio: ratio, backgroundColor: source.tone, ...style }}
    >
      <Image
        src={photoSrc(source)}
        alt={alt ?? source.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={source.blurDataURL}
      />
      {children}
    </div>
  );
}
