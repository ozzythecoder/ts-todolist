import { Todo } from "../Interfaces";
import Button from "./Button";

interface Props {
  todo: Todo;
  completeTask(completedTaskID: number): void;
}

export default function TodoTask({ todo, completeTask }: Props) {
  return (
    <li
      className={
        `todo-item
        ${todo.urgent ? "urgent" : ""}
      `}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "2.5rem",
        padding: "3px 5px",
      }}
    >
      <div
        className={todo.complete ? "complete" : ""}
      >
        {todo.urgent && !todo.complete && "🔥 "}
        {todo.text}
      </div>
      <div>
        {todo.complete ? (
          "✅"
        ) : (
          <Button text="Complete" callback={() => completeTask(todo.id)} />
        )}
      </div>
    </li>
  );
}
