import { Consumer } from "./context";
import TextField from "@material-ui/core/TextField";
import theme from "../theme";
import Btns from "./Btns";
import Todo from "./Todo";

// Count todos and display them
const TodoTracker = () => {
  return (
    <Consumer>
      {({ todos, todo, actions }) => {
        const todoList = todos.map((todo, index) => (
          <Todo key={index} id={index} todo={todo} />
        ));

        return (
          <div className="todo-container" style={TodoContainer}>
            <Btns />
            <TextField
              style={input}
              onChange={actions.handleChange}
              label="Task"
              value={todo}
            />
            {todoList.length === 0 ? (
              <h2 style={h2}>Add tasks...</h2>
            ) : (
              <ul style={list}>{todoList}</ul>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

const TodoContainer = {
  color: theme.colorText,
  display: "block",
  margin: "auto",
  padding: "1rem",
  borderRadius: "5px",
  height: "420px",
  width: "90%",
  overflowY: "scroll",
};
const list = {
  margin: "3rem 0",
  padding: "0",
};
const h2 = {
  textAlign: "center",
  fontWeight: "300",
};
const input = {
  margin: "3rem 0 1rem",
  width: "100%",
};

export default TodoTracker;
