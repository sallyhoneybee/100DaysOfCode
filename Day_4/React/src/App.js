import logo from "./assets/investment-calculator-logo.png";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Results />
    </div>
  );
}

export default App;
