import theme from '../theme';

const Weather = ({ weatherIcon, weatherDesc }) => {
    return (
        <div className="weather" style={weatherStyles}>
            <img src={weatherIcon} alt='weather' style={weatherImgStyles} />
            <span style={weatherDescStyles}>Today: {weatherDesc}</span>
        </div>
    )
}

const weatherStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontSize: theme.lengthMd2
}

const weatherImgStyles = {
    width: '50px'
}

const weatherDescStyles = {
    fontSize: theme.lengthSm3
}

export default Weather
