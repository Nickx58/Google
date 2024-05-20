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