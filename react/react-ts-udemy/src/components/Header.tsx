import { type ReactNode } from "react";

type ImageProps = {
  src: string;
  alt: string;
};
type HeaderProps = {
  image: ImageProps;
  children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
