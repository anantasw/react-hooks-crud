import { useState, useEffect } from 'react';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.editedUser);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        
        props.updateUser(user.id, user);
    }

    useEffect(() => {
        setUser(props.editedUser);
    }, [props])

    return (
        <form onSubmit={submitFormHandler}>
            <label>First Name (*) : {user.firstName}</label>
            <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={inputChangeHandler}
            />
            <label>Last Name (*) : {user.lastName}</label>
            <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={inputChangeHandler}
            />
            <button>Update User</button>
            <button
                onClick={() => props.setEditMode(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    );
}

export default EditUserForm;