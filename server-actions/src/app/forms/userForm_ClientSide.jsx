'use client'
import { createUser } from "../actions/userAction";

export default function CreateUserForm() {

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
        };

        try {
            //calling server actions
            const result = await createUser(data);
            alert(`User created: ${result.message}`);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">Create User</button>
        </form>
    );
}