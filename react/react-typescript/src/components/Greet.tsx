type GreetProps = {
  name?: string; // use ? to tell this props will be optional
  bikesList: {
    name: string;
  }[];
  carObject: {
    name: string;
    type: string;
  };
};
export const Greet = ({ name, bikesList, carObject }: GreetProps) => {
  return (
    <div>
      <h2>Welcome {name}!. You can do it easily...</h2>
      <h5>
        {carObject.name} {carObject.type}
      </h5>
      {bikesList.map((bike) => {
        return <h3 key={bike.name}>{bike.name}</h3>;
      })}
    </div>
  );
};
