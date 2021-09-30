import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
    </div>
  );
}

export default App;
