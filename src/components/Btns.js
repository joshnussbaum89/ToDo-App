import Button from '@material-ui/core/Button';

const Btns = ({ addTask, deleteTask }) => {
    return (
        <div style={buttonGroup}>
            <Button style={button} className='button' color="primary" variant="contained" onClick={addTask}>Add Task</Button>
            <Button style={button} className='button' color="secondary" variant="contained" onClick={deleteTask}>Delete Task</Button>
        </div>
    )
}

const buttonGroup = {
    display: 'flex',
    justifyContent: 'flex-end'
}

const button = {
    marginLeft: '1rem',
}

export default Btns
