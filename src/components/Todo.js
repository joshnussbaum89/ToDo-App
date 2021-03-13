import theme from '../theme';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';

const Todo = ({
    todo,
    id,
    toggleCompletedTask,
}) => {
    return (
        <>
            <li style={item} onClick={toggleCompletedTask}>{id + 1}. {todo}
                <CreateSharpIcon />
            </li>
        </>
    )
}

const item = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colorGrey,
    margin: '.5rem 0',
    padding: '2rem 1rem',
    listStyleType: 'none',
    borderRadius: '5px',
}

export default Todo
