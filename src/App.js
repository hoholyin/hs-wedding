import './App.css';
import RsvpForm from "./RsvpForm";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <span className="app-title">HOL YIN & SHI HUI</span>
            <span className="app-subheader">9 March 2025</span>
        </header>
        <body>
        <div className="main">
            <RsvpForm></RsvpForm>
        </div>
      </body>
    </div>
  );
}

export default App;
