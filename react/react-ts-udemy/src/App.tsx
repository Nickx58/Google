import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "./assets/goals.jpg";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleGoal() {
    setGoals((prevGoal) => {
      const newGoal: CourseGoal = {
        title: "Learn How to drive",
        description: "Car drive krni jaldi sikhna ha",
        id: Math.random(),
      };
      return [...prevGoal, newGoal];
    });
  }

  function handleGoalDelete(id: number) {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleGoal}>Add Goal</button>
      <CourseGoalList goals={goals} deleteGoal={handleGoalDelete} />
    </main>
  );
}
