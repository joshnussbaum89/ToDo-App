import React from 'react';
import theme from '../theme';

const Todo = ({ todoValue, itemNumber }) => {
    return (
        <>
            <li style={item}>{todoValue} number {itemNumber + 1}</li>
        </>
    )
}

const item = {
    backgroundColor: theme.colorGrey,
    margin: '.2rem 0',
    padding: '2rem 1rem',
    listStyleType: 'none',
    borderRadius: '5px',
}

export default Todo
