import Input from "./AdvanceComponents/Input";
import Button from "./AdvanceComponents/Button";
import Container from "./AdvanceComponents/Container";

export default function App() {
  return (
    <main>
      <Input id="name" label="Your Name" type="text" />
      <Input id="name" label="Your Name" type="number" />
      <p>
        <Button type="button">Button</Button>
      </p>
      <p>
        <Button type="link" href="https://www.google.com">
          Link
        </Button>
      </p>
      <Container as={Button}>Click me</Container>
    </main>
  );
}
