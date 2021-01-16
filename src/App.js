import { useState } from 'react';
import Table from './components/table/table';

const App = () => {
  const usersState = [
    { id: 1, firstName: 'Anantaswarya', lastName: 'Abhisena' },
    { id: 2, firstName: 'Angga', lastName: 'Prabawa' },
    { id: 3, firstName: 'Agus', lastName: 'Mahasadhu' }
  ];

  const [users, setUsers] = useState(usersState);

  return (
    <div className="container">
      <h1>React Hooks CRUD</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <Table users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;