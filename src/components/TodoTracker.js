import React from 'react';
import theme from '../theme';
import Btns from './Btns';
import Todo from './Todo';

const TodoTracker = ({ addTask, deleteTask, todos }) => {
    // count items in todo list
    const todoList = todos.map((todo, index) => (
        <Todo key={index} todoValue={todo} itemNumber={index}/>
    ))

    return (
        <div className="todo-container" style={TodoContainer}>
            <Btns addTask={addTask} deleteTask={deleteTask} />
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
    border: `1px solid ${theme.colorGrey}`,
    borderRadius: '5px',
    height: '500px',
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

export default TodoTracker
