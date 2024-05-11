import { useState } from "react"

function UserForm({ addUsers }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addUsers({ name, email })
        setEmail("");
        setName("")
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button>
            Add User
        </button>
    </form>
}

export default UserForm;