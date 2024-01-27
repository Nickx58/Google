import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type CourseGoal as CourseGoalType } from "../App";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  deleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, deleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        Your goals is empty. Add few Goals in the List
      </InfoBox>
    );
  }
  let warningNode: ReactNode;
  if (goals.length >= 4) {
    warningNode = (
      <InfoBox mode="warning" severity="high">
        You have too many things in your plate. Please slow down
      </InfoBox>
    );
  }
  return (
    <>
      {warningNode}
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
    </>
  );
};

export default CourseGoalList;
