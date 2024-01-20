type HeadingProps = {
  children: string;
};
export const Heading = ({ children }: HeadingProps) => {
  return <h3>{children}</h3>;
};
