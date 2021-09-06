import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bangkok" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://katherine-simpson.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Katherine Simpson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Katherine1983-jpg/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
