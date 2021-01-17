const DataTable = ({ users, editUser, deleteUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => editUser(user)}
                                >Edit</button>
                                <button 
                                    className="button muted-button"
                                    onClick={() => deleteUser(user.id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Users Available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default DataTable;