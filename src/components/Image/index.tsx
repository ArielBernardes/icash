import { ImgContainer } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return <ImgContainer {...rest} />;
};

export default Image;
