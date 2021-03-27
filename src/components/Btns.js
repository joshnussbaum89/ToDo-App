import { Consumer } from "./context";
import Button from "@material-ui/core/Button";

const Btns = () => {
  return (
    <Consumer>
      {({ actions }) => (
        <div style={buttonGroup}>
          <Button
            style={button}
            className="button"
            color="primary"
            variant="contained"
            onClick={actions.addTask}
          >
            Add Task
          </Button>
          <Button
            style={button}
            className="button"
            color="secondary"
            variant="contained"
            onClick={actions.deleteTask}
          >
            Delete Task
          </Button>
        </div>
      )}
    </Consumer>
  );
};

const buttonGroup = {
  display: "flex",
  justifyContent: "flex-end",
};

const button = {
  marginLeft: "1rem",
};

export default Btns;
