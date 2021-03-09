import theme from '../theme';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const Todo = ({ todoValue, itemNumber }) => {
    return (
        <>
            <li style={item}>{itemNumber + 1}. {todoValue}
                {/* toggle icon for completed or uncompleted tasks */}
                <CheckRoundedIcon color='primary' />
            </li>
        </>
    )
}

const item = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colorGrey,
    margin: '.2rem 0',
    padding: '2rem 1rem',
    listStyleType: 'none',
    borderRadius: '5px',
}

export default Todo
