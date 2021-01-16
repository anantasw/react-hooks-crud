import { useState } from 'react';

const AddUserForm = (props) => {
    const initFormState = { id: null, firstName: '', lastName: '' }
    const [user, setUser] = useState(initFormState);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        if (!user.firstName || !user.lastName) return;

        props.addUser(user);
        setUser(initFormState);
    }

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
            <button>Add New User</button>
        </form>
    );
}

export default AddUserForm;