import theme from '../theme';

const Clock = ({ time }) => {
    return (
        <>
            <p className='clock' style={clockStyles}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </>
    )
}

const clockStyles = {
    width: '120px',
    fontSize: theme.lengthMd2
}

export default Clock
