import type { FormEvent } from "react";
import { useRef } from "react";

type NewGoalProps = {
    onAddGoal : (goal:string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const desc = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredDesc = desc.current!.value;
        onAddGoal(enteredGoal, enteredDesc);
        event.currentTarget.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='title'>Set the title</label>
                <input type="text" id="title" ref={goal} />
            </p>
            <p>
                <label htmlFor='desc'>Set the Summary</label>
                <input type="text" id="desc" ref={desc} />
            </p>
            <button>Add New Goal</button>
        </form>
    );
}