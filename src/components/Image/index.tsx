import { ImgContainer } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image = ({ src, className, alt, ...rest }: ImageProps) => {
  return <ImgContainer {...rest} />;
};

export default Image;
