import { createUser } from "../actions/userAction";

export default function CreateUserForm() {

    return (
        <form action={createUser} method="POST">
            <input type="text" id="name" name="name" placeholder="Name" required />
            <input type="email" id="name" name="email" placeholder="Email" required />
            <button type="submit">Create User</button>
        </form>
    );

}