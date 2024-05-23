import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it show two input and a button", () => {
    // render the component
    render(<UserForm />)

    // Manipulate the component or find an element in it.
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})

test('it call userOnAddFunction when form is submit', async () => {
    const mock = jest.fn();

    // render the component
    render(<UserForm addUsers={mock} />);

    // find the element
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    // simulate the typing in name

    await user.click(nameInput);
    await user.keyboard('Nikhil');

    // simulate the typing in email

    await user.click(emailInput);
    await user.keyboard('nn@gmail.com');

    // find the button

    const button = screen.getByRole('button');

    // simulate the click

    await user.click(button);

    // assert the function call
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: "Nikhil", email: "nn@gmail.com" });

})

test('should empty the input value on button click', async () => {
    const mock = jest.fn();

    // render the component
    render(<UserForm addUsers={mock} />);

    // find the element
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    // simulate the typing in name

    await user.click(nameInput);
    await user.keyboard('Nikhil');

    // simulate the typing in email

    await user.click(emailInput);
    await user.keyboard('nn@gmail.com');

    // find the button

    const button = screen.getByRole('button');

    // simulate the click

    await user.click(button);

    // assert the function call
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')

})