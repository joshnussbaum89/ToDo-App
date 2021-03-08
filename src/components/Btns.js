import React from 'react';
import Button from '@material-ui/core/Button';

const Btns = ({ addTask, deleteTask }) => {
    return (
        <div style={buttonGroup}>
            <Button color="primary" variant="contained" onClick={addTask}>Add Task</Button>
            <Button color="secondary" variant="contained" onClick={deleteTask}>Delete Task</Button>
        </div>
    )
}

const buttonGroup = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default Btns
