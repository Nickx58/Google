import Input from "./AdvanceComponents/Input";
import Button from "./AdvanceComponents/Button";

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
    </main>
  );
}
