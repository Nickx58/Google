type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text Goes here</div>;
};
