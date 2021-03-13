import theme from '../theme';

const Weather = ({ weatherIcon, weatherDesc, temperature }) => {
    return (
        <div className="weather" style={weatherStyles}>
            <img src={weatherIcon} alt='weather' style={weatherImgStyles} />
            <h3 style={cityTitle}>Madison, WI</h3>
            <span style={weatherDescStyles}>Today: <strong>{weatherDesc}</strong></span>
            <span style={weatherDescStyles}>Temp: <strong>{temperature}&deg;F</strong></span>
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
const cityTitle = {
    fontWeight: '400',
    margin: '.5rem 0',
}

export default Weather
