import { render, screen, within } from "@testing-library/react"
import UserList from './UserList'

test('should render the component', () => {
    // render the component 
    const users = [
        { name: "nn", email: "nn@gmail.com" }
    ];

    render(<UserList users={users} />);

    const text = screen.getByText('Name');
    expect(text).toBeInTheDocument();
})

test('should render one row', () => {
    // render the component 
    const users = [
        { name: "nn", email: "nn@gmail.com" },
        { name: "nisha", email: "nisahn@gmail.com" }
    ];

    render(<UserList users={users} />);


    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    expect(rows).toHaveLength(2);
})

test('should render one row data-test-id way', () => {
    // render the component 
    const users = [
        { name: "nn", email: "nn@gmail.com" },
        { name: "nisha", email: "nisahn@gmail.com" }
    ];

    const { container } = render(<UserList users={users} />);


    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);
})

test('should render the email and name of the each user', () => {
    const users = [
        { name: "nn", email: "nn@gmail.com" },
        { name: "nisha", email: "nisahn@gmail.com" }
    ];

    render(<UserList users={users} />);
    for (let user of users) {
        const name = screen.getByRole('cell', {
            name: user.name
        })
        const email = screen.getByRole('cell', {
            name: user.email
        });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})