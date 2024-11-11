interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

export default function Image({ width, height, ...props }: ImageProps) {
  return <img {...props} style={{ maxWidth: width, height: 'auto' }} />;
}