import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";

import App from "./App";

test('should render the APP js', async () => {
    render(<App />);

    const name = screen.getByRole('textbox', {
        name: /name/i
    })

    const email = screen.getByRole('textbox', {
        name: /email/i
    })

    const button = screen.getByRole('button');

    await user.click(name);
    await user.keyboard('nikhil');

    await user.click(email);
    await user.keyboard('nn@gmail.com');

    await user.click(button);

    // get rows
    const nameRow = screen.getByRole('cell', { name: /nikhil/i });
    const emailRow = screen.getByRole('cell', { name: /nn@gmail\.com/i });

    expect(nameRow).toBeInTheDocument();
    expect(emailRow).toBeInTheDocument();
})