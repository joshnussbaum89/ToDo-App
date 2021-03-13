import React, { Component } from 'react';

// API Key
import apiKey from './config'

// Components
import Header from './components/Header';
import TodoTracker from './components/TodoTracker';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  state = {
    todos: [],
    todoValue: '',
    weather: '',
    weatherDesc: '',
    loading: true
  }

  componentDidMount() {
    this.fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=Madison&appid=${apiKey}`)
      .then(this.setState({
        loading: true
      }))
      .catch(error => console.log('Uh Oh!', error))
  }

  fetchWeather = async (string) => {
    const response = await fetch(string);
    const weatherResponse = await response.json();

    // Set weather icon to the current weather
    const icon = `http://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`
    const description = weatherResponse.weather[0].description;
    await this.setState({
      weather: icon,
      weatherDesc: description,
      loading: false
    });

    return weatherResponse;
  }

  // Add task to UI using value passed in from input field
  addTask = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todoValue], // pass value
      todoValue: '',
    });
  }

  // Track user input in Task input field
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      todoValue: event.target.value
    });
  }

  toggleCompletedTask = (e) => {
    e.target.classList.toggle('complete');
    return e.target.classList.contains('complete');
  }

  // Delete last task on the list
  deleteTask = () => {
    // copy values to this.state.todos OBJECT to an ARRAY
    const todoArray = [...this.state.todos]
    todoArray.pop();

    this.setState({
      todos: todoArray
    });
  }

  render() {
    return (
      <div className="App" >
        {this.state.loading
          ?
          <div className="loading">
            <CircularProgress />
          </div>
          :
          <>
            <Header
              weatherIcon={this.state.weather}
              weatherDesc={this.state.weatherDesc}
            />
            <TodoTracker
              addTask={this.addTask}
              handleChange={this.handleChange}
              deleteTask={this.deleteTask}
              todos={this.state.todos}
              todo={this.state.todoValue}
              toggleCompletedTask={this.toggleCompletedTask}
              isCompleted={this.state.isCompleted}
            />
          </>
        }
      </div>
    );
  }
}

export default App;
