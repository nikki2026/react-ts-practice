import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import goalImg from './assets/goals.jpg'
import CourseGoalList from './Components/CourseGoalList';
import NewGoal from './Components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  function handleAddGoals() {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'second chapter',
        description: 'second chapters description'
      }
      return [...prev, newGoal]
    })
  }

  function handleDeleteGoal(id:number) {
    setGoals(prev=> prev.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <main>
        <Header img={{src: goalImg, alt: 'goal image'}}>
          <h1>Welcome to your goals</h1>
        </Header>
        <NewGoal />
        {/* <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /> */}
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  )
}

export default App
