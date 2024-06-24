import './App.css';
import RsvpForm from "./RsvpForm";
import headerphoto from "./assets/header-photo-3.jpg";
import boy from "./assets/boy2.jpg";
import girl from "./assets/girl2.jpg";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="app-title-container">
                <img className="header-photo" src={headerphoto}/>
                <div className="header-title">
                    <span className="app-title-detail">WE ARE GETTING MARRIED!</span>
                    <span className="app-title">HOL YIN</span>
                    <span className="app-title-small">&</span>
                    <span className="app-title">SHI HUI</span>
                    <span className="app-subheader">MAR 9, 2025</span>
                    <span className="app-subheader-detail">PARKROYAL, MARINA BAY</span>
                    <span className="app-subheader-detail">GARDEN BALLROOM, LEVEL 1</span>
                    <span className="app-subheader-detail">COCKTAIL STARTS AT 7PM.</span>
                </div>
                <div className="spacer"/>
            </div>
        </header>
        <body>
        <div className="main">
            <div className="welcome-message">
                <img className="welcome-photo" src={boy}/>
                <div className="welcome-message-text-container">
                    <span className="welcome-message-text">Please let us know if you are joining our big day</span>
                    <br />
                    <span className="welcome-message-text">Thank you~</span>
                </div>
                <img className="welcome-photo" src={girl}/>
            </div>
            <RsvpForm></RsvpForm>
        </div>
        </body>
    </div>
  );
}

export default App;
