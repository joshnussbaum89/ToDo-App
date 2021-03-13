import TextField from '@material-ui/core/TextField';
import theme from '../theme';
import Btns from './Btns';
import Todo from './Todo';

const TodoTracker = ({
    addTask,
    handleChange,
    deleteTask,
    todos,
    todo,
    toggleCompletedTask,
}) => {
    // count items in todo list
    const todoList = todos.map((todo, index) => (
        <Todo
            key={index}
            id={index}
            todo={todo}
            toggleCompletedTask={(e) => toggleCompletedTask(e)}
        />
    ));

    return (
        <div className="todo-container" style={TodoContainer} >
            <Btns addTask={addTask} deleteTask={deleteTask} />
            <TextField style={input} onChange={handleChange} label='Task' value={todo} />
            {todoList.length === 0 ?
                <h2 style={h2}>Add tasks...</h2>
                :
                <ul style={list}>
                    {todoList}
                </ul>
            }
        </div>
    )
}

const TodoContainer = {
    color: theme.colorText,
    display: 'block',
    margin: 'auto',
    padding: '1rem',
    borderRadius: '5px',
    height: '450px',
    width: '90%',
    maxWidth: '1000px',
    overflowY: 'scroll'
}
const list = {
    margin: '3rem 0',
    padding: '0'
}
const h2 = {
    textAlign: 'center',
    fontWeight: '300',
}
const input = {
    margin: '1rem 0',
    width: '100%'
}

export default TodoTracker
