import { render, screen } from '@testing-library/react';

function ColorList() {
    return (
        <ul>
            <li>Black</li>
            <li>Blue</li>
            <li>Green</li>
        </ul>
    );
}

test('getBy, queryBy and findBy when we find 0 element', async () => {
    render(<ColorList />);
    expect(
        () => screen.getByRole('textbox')
    ).toThrow();

    expect(screen.queryByRole('textbox')).toEqual(null);

    let errorThrow = false;
    try {
        await screen.findByRole('textbox');
    } catch (err) {
        errorThrow = true;
    }
    expect(errorThrow).toEqual(true);
});

test('getBy, queryBy and findBy when we find 1 element', async () => {
    render(<ColorList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getBy, queryBy and findBy when we find > 1 element', async () => {
    render(<ColorList />);
    expect(
        () => screen.getByRole('listitem')
    ).toThrow();

    expect(() => screen.queryByRole('listitem')).toThrow();

    let errorThrow = false;
    try {
        await screen.findByRole('listitem');
    } catch (err) {
        errorThrow = true;
    }
    expect(errorThrow).toEqual(true);
});

test('getAllBy, queryAllBy and findAllBy', async () => {
    render(<ColorList />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.queryAllByRole('listitem')).toHaveLength(3);
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});

/*
When to use each
Goal of test                            Use
Prove an element exists                 getBy,getAllBy
Prove an element does not exist         queryBy,queryAllBy
Make Sure an element eventually exists  findBy,findAllBy
*/

