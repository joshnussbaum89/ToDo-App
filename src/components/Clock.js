import theme from "../theme";
import { Consumer } from "./context";

const Clock = () => {
  return (
    <Consumer>
      {({ time }) => (
        <>
          <p className="clock" style={clockStyles}>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </>
      )}
    </Consumer>
  );
};

const clockStyles = {
  width: "120px",
  fontSize: theme.lengthMd2,
};

export default Clock;
