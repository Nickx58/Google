import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  deleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, deleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={deleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
