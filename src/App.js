import "./App.css";
import Description from "./components/Description";
import DonutWheel from "./components/Donut/DonutWheel";
import Background from "./layout/Background";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div>
      <Background>
        <Navbar />
        <main>
          <Description />
          <DonutWheel />
        </main>
      </Background>
    </div>
  );
}

export default App;
