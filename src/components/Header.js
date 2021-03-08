import React, { Component } from 'react';
import theme from '../theme';

// Components
import Weather from './Weather';
import Clock from './Clock';

class Header extends Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <header style={headerStyles} >
                <Weather
                    weatherIcon={this.props.weatherIcon}
                    weatherDesc={this.props.weatherDesc}
                />
                <h1 style={h1}>ToDos</h1>
                <Clock time={this.state.time} />
            </header>
        )
    }
};

const headerStyles = {
    fontSize: theme.lengthMd3,
    color: theme.colorText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2rem'
};

const h1 = {
    fontWeight: '100',
    borderRadius: '5px',
    padding: '1rem'
}

export default Header
