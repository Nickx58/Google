import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUsers = user => {
    setUsers([...users, user])
  }
  return (
    <div>
      <UserForm addUsers={handleAddUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
