import Image from 'next/image';
import { PHOTOS, photoSrc, type PhotoKey } from '@/lib/images';

type Scrim = 'none' | 'full' | 'soft';

function isPhotoKey(photo: string): photo is PhotoKey {
  return Object.prototype.hasOwnProperty.call(PHOTOS, photo);
}

type FigureProps = {
  /** Either a curated catalogue key, or a direct image URL/path — CMS
   *  content (sectors, projects, brands, branches added from the admin
   *  dashboard) stores an uploaded file path here instead of a PhotoKey. */
  photo: PhotoKey | string;
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
  const source = isPhotoKey(photo) ? PHOTOS[photo] : null;
  const src = source ? photoSrc(source) : photo;

  return (
    <div
      className={`figure ${SCRIM_CLASS[scrim]} ${className}`.trim()}
      style={{ aspectRatio: ratio, backgroundColor: source?.tone ?? '#1a1a1a', ...style }}
    >
      <Image
        src={src}
        alt={alt ?? source?.alt ?? ''}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        {...(source ? { placeholder: 'blur' as const, blurDataURL: source.blurDataURL } : {})}
      />
      {children}
    </div>
  );
}
