import theme from '../theme';

const Clock = ({ time }) => {
    return (
        <>
            <p style={clockStyles}>{time.toLocaleTimeString()}</p>
        </>
    )
}

const clockStyles = {
    width: '120px',
    fontSize: theme.lengthMd2
}

export default Clock
