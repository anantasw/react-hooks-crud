import { useState } from 'react';

import Table from './components/table/Table';
import AddUserForm from './components/form/AddUserForm';

const App = () => {
  const usersState = [
    { id: 1, firstName: 'Anantaswarya', lastName: 'Abhisena' },
    { id: 2, firstName: 'Angga', lastName: 'Prabawa' },
    { id: 3, firstName: 'Agus', lastName: 'Mahasadhu' }
  ];

  const [users, setUsers] = useState(usersState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <h1>React Hooks CRUD</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>User Data</h2>
          <Table users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;