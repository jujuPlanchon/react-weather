import "./App.css";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  let weatherData = {
    city: "Geneva",
    temperature: 10,
    date: "Mon, 13 Dec 2021",
    hour: "06:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 20,
  };
  return (
    <div className="App">
      <div className="weather-app">
        <div className="overview">
          <h1>{weatherData.city} </h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.hour}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a
                    className="celsius"
                    href="https://https://en.wikipedia.org/wiki/Celsius"
                    target="_blank"
                    rel="noreferrer"
                    id="celsius-link"
                  >
                    °C
                  </a>{" "}
                  |
                  <a
                    className="fahr"
                    href="https://https://en.wikipedia.org/wiki/Fahrenheit"
                    target="_blank"
                    rel="noreferrer"
                    id="fahrenheit-link"
                  >
                    °F
                  </a>
                </span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <SearchEngine />
        <p>
          Open Source at{" "}
          <a
            href="https://https://github.com/jujuPlanchon/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Julia's GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
