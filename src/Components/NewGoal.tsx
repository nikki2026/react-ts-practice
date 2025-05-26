import type { FormEvent } from "react";

export default function NewGoal() {

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='title'>Set the title</label>
                <input type="text" id="title" />
            </p>
            <p>
                <label htmlFor='desc'>Set the Summary</label>
                <input type="text" id="desc" />
            </p>
            <button>Add New Goal</button>
        </form>
    );
}