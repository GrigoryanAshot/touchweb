import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "alt" | "width" | "height"> & {
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function OptimizedImage({
  alt,
  width,
  height,
  priority = false,
  fetchPriority,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fetchPriority={priority ? "high" : fetchPriority}
      sizes={sizes ?? `${width}px`}
    />
  );
}
