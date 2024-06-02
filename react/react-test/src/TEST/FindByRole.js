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
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}

render(<AccessilbeName />);

test('can selet by accessible name', () => {
  const submitButton = screen.getByRole('button', {
    name: /submit/i
  });
  const cancelButton = screen.getByRole('button', {
    name: /cancel/i
  });
})