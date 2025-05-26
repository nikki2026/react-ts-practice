// import type { PropsWithChildren } from "react";

import type { PropsWithChildren } from "react";

// // interface CourseGoal {
// //     title: string,
// //     children: ReactNode
// // }

type CourseGoal = PropsWithChildren<{title: string; id:number; onDelete:(id:number)=>void}>

export default function CourseGoal({title, children, id, onDelete}: CourseGoal) {
    return (
        <article>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <button onClick={() =>onDelete(id)}>Delete</button>
        </article>
    );
}

// type CourseGoalProp = PropsWithChildren<{title:string}>

// const CourseGoal: FC<CourseGoalProp> = ({title, children}) => {
//      return (
//         <article>
//             <div>
//                 <h1>{title}</h1>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// }

// export default CourseGoal;