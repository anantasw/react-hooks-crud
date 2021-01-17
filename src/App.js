import { useState } from 'react';

import DataTable from './components/table/DataTable';
import AddUserForm from './components/form/AddUserForm';
import EditUserForm from './components/form/EditUserForm';

const App = () => {
  const usersState = [
    { id: 1, firstName: 'Anantaswarya', lastName: 'Abhisena' },
    { id: 2, firstName: 'Angga', lastName: 'Prabawa' }
  ];

  const [users, setUsers] = useState(usersState);

  //editing mode
  const [editMode, setEditMode] = useState(false);

  const initFormStateEdit = { id: null, firstName: null, lastName: null }
  const [editedUser, setEditedUser] = useState(initFormStateEdit);

  const editUser = (user) => {
    setEditMode(true);

    setEditedUser({ id: user.id, firstName: user.firstName, lastName: user.lastName });
  }

  const updateUser = (id, updatedUser) => {
    setEditMode(false);

    setUsers(users.map( user => {
      return (user.id === id ? updatedUser : user)
    }))
  }

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setEditMode(false);
    
    setUsers(users.filter(user => user.id !== id))
  }

  const formUser = editMode ? (
    <div>
      <h2>Edit User</h2>
      <EditUserForm
        setEditMode={setEditMode}
        editedUser={editedUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add User</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )

  return (
    <div className="container">
      <h1>Simple CRUD</h1>
      <div className="flex-row">
        <div className="flex-large">
          {formUser}
        </div>
        <div className="flex-large">
          <h2>User Data</h2>
          <DataTable 
            users={users}
            editUser={editUser}
            deleteUser={deleteUser} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;