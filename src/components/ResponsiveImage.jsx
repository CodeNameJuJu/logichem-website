import React from 'react';
import images from '../data/images.json';

export default function ResponsiveImage({
  imageKey,
  alt = '',
  sizes = '(min-width: 1200px) 1140px, 100vw',
  loading = 'lazy',
  eager = false,
  className,
}) {
  const img = images[imageKey];
  if (!img) return null;
  return (
    <img
      className={className}
      src={img.src}
      srcSet={img.srcset}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={eager ? 'eager' : loading}
      decoding="async"
      {...(eager ? { fetchpriority: 'high' } : {})}
    />
  );
}
