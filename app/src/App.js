import logo from './logo.svg';
import './App.css';

function App() {
  //TODO: should be passed as props to custom built label component
  let alphabetical = 50;
  let real_num = 40;
  let integres = 70;
  let alphanumeric = 23;
  let applink = "https://link-to-the-thing"

  return (
    <div className="App">
      <header className="App-header">
      <p>Random objects generator</p>
      </header>
      <button className="App-button">
        Generate
      </button>
      <br /><br />
      <span>Link: <a
          className="App-link"
          href={applink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {applink}
        </a></span>
        <br /><br />
        <button
          className="App-button">
          Report
        </button>
        <br /><br /><br /><br />
        <label className="App-label">
          Alphabetical String: <b>{alphabetical}</b>
        </label><br /><br />
        <label className="App-label">
          Real numbers: <b>{real_num}</b>
        </label><br /><br />
        <label className="App-label">
          Integres: <b>{integres}</b>
        </label><br /><br />
        <label className="App-label">
          Alphanumerics: <b>{alphanumeric}</b>
        </label><br /><br />
    </div>
  );
}

export default App;
