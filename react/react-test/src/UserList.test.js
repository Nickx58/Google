import { render, screen } from "@testing-library/react"
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