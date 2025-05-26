import CourseGoal from './CourseGoal';
import type { CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';
import type { ReactNode } from 'react';

type CourseGoalListProp = {
    goals: CGoal[];
    onDelete:(id:number)=>void;
}

export default function CourseGoalList({goals, onDelete}: CourseGoalListProp) {

    let warningContent : ReactNode;
    if(goals.length === 0) {
        warningContent = <InfoBox mode='hint'>No goals found. Maybe add one?</InfoBox>
    }
    else if(goals.length >= 4) {
        warningContent = <InfoBox mode='warning' severity='high'>Don't overload youself</InfoBox>
    }
    return(
        <>
        {warningContent}
         <ul>
            {goals.map((goal)=> (
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                    <p>{goal.description}</p>
                </CourseGoal>
            </li>
            ))}
        </ul>
        </>
    );
}