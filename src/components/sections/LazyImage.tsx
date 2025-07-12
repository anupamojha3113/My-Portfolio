interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const LazyImage = ({ alt, src, ...props }: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage;