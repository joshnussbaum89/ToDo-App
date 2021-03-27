import React, { Component } from "react";
import { Provider } from "./components/context";

// API Key
import apiKey from "./config";

// Components
import Header from "./components/Header";
import TodoTracker from "./components/TodoTracker";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
  state = {
    todos: [],
    todoValue: "",
    weather: "",
    weatherDesc: "",
    tempurature: 0,
    loading: true,
    time: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?zip=53703&units=imperial&appid=${apiKey}`
    )
      .then(
        this.setState({
          loading: true,
        })
      )
      .catch((error) => console.log("Uh Oh!", error));
  }

  fetchWeather = async (string) => {
    const response = await fetch(string);
    const weatherResponse = await response.json();

    // Set weather icon to the current weather
    const icon = `http://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`;
    const description = weatherResponse.weather[0].description;
    const temp = weatherResponse.main.temp;

    await this.setState({
      weather: icon,
      weatherDesc: description,
      tempurature: temp,
      loading: false,
    });

    return weatherResponse;
  };

  // Add task to UI using value passed in from input field
  addTask = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todoValue], // pass value
      todoValue: "",
    });
  };

  // Track user input in Task input field
  handleChange = (event) => {
    this.setState({
      todoValue: event.target.value,
    });
  };

  toggleCompletedTask = (e) => {
    e.target.classList.toggle("complete");
    return e.target.classList.contains("complete");
  };

  // Delete last task on the list
  deleteTask = () => {
    // copy values to this.state.todos OBJECT to an ARRAY
    const todoArray = [...this.state.todos];
    todoArray.pop();

    this.setState({
      todos: todoArray,
    });
  };

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    return (
      <Provider
        value={{
          weatherIcon: this.state.weather,
          weatherDesc: this.state.weatherDesc,
          temperature: this.state.tempurature,
          todos: this.state.todos,
          todo: this.state.todoValue,
          isCompleted: this.state.isCompleted,
          time: this.state.time,
          actions: {
            addTask: this.addTask,
            deleteTask: this.deleteTask,
            handleChange: this.handleChange,
            toggleCompletedTask: this.toggleCompletedTask,
            tick: this.tick,
          },
        }}
      >
        <div className="App">
          {this.state.loading ? (
            <div className="loading">
              <CircularProgress />
            </div>
          ) : (
            <>
              <Header />
              <TodoTracker />
            </>
          )}
        </div>
      </Provider>
    );
  }
}

export default App;
