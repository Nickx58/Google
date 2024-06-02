import { render, screen } from '@testing-library/react';

function RoleExample() {
  return (
    <div>
      <a href="/">Link</a>
      <button>Button</button>
      <footer>Footer Content</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      <img alt="description" /> img
      <input type="checkbox" /> checkbox
      <input type="number" /> Number
      <input type="radio" /> radio
      <input type="text" /> Text
      <li> ListItem</li>
      <ul>List Group </ul>
    </div>
  );
}

test('can find element by role', () => {
  render(<RoleExample />);

  const roles = [
    'link',
    'button',
    'contentinfo',
    'heading',
    'banner',
    'img',
    'checkbox',
    'spinbutton',
    'radio',
    'textbox',
    'listitem',
    'list',
  ];
  for (let role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
});

function AccessilbeName() {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" />
      <label htmlFor="search">Search</label>
      <input id="search" />
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}

render(<AccessilbeName />);

test('can selet by accessible name', () => {
  const submitButton = screen.getByRole('button', {
    name: /submit/i,
  });
  const cancelButton = screen.getByRole('button', {
    name: /cancel/i,
  });
});
test("can select input by name", () => {
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });
  const searchInput = screen.getByRole('textbox', {
    name: /search/i
  });
  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
})

function IconButton() {
  return (
    <div>
      <button aria-label="signIN">
        <svg />
      </button>
      <button aria-label="signOUT">
        <svg />
      </button>
    </div>
  )
}

render(<IconButton />);

test("icon button aria-label", () => {
  const signINButton = screen.getByRole('button', {
    name: /signIN/i
  });
  const signOUTButton = screen.getByRole('button', {
    name: /signOUT/i
  });
  expect(signINButton).toBeInTheDocument();
  expect(signOUTButton).toBeInTheDocument();
});