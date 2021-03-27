import { Consumer } from "./context";
import theme from "../theme";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";

const Todo = ({ todo, id }) => {
  return (
    <Consumer>
      {({ actions }) => (
        <>
          <li style={item} onClick={actions.toggleCompletedTask}>
            {id + 1}. {todo}
            <CreateSharpIcon />
          </li>
        </>
      )}
    </Consumer>
  );
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.colorGrey,
  margin: ".5rem 0",
  padding: "2rem 1rem",
  listStyleType: "none",
  borderRadius: "5px",
};

export default Todo;
