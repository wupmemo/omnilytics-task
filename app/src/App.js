// import logo from './logo.svg';
import './App.css';



function App() {
  //TODO: should be passed as props to custom built label component
  let alphabeticalString = 50;
  let realNum = 40;
  let integres = 70;
  let alphaNumerics = 23;
  let appLink = "https://link-to-the-thing"

  return (
    <div className="App">
      <header className="App-header">
      <p>Random objects generator</p>
      </header>
      <button className="App-button">
        Generate
      </button>
      <br /><br />
      <span className="App-label">Link: <a
          className="App-link"
          href={appLink}
          target="_blank"
          rel="noopener noreferrer">
          {appLink}
        </a></span>
        <br /><br />
        <button
          className="App-button">
          Report
        </button>
        <div className="App-labels">
          <label className="App-label">
            Alphabetical String: <b>{alphabeticalString}</b>
          </label>
          <label className="App-label">
            Real numbers: <b>{realNum}</b>
          </label>
          <label className="App-label">
            Integres: <b>{integres}</b>
          </label>
          <label className="App-label">
            Alphanumerics: <b>{alphaNumerics}</b>
          </label>
        </div>
    </div>
  );
}

export default App;
