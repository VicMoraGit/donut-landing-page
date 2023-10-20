import "./App.css";
import ThemeContextProvider from "./context/theme-context";
import Navbar from "./layout/Navbar/Navbar/Navbar";
import Background from "./layout/Background/Background";
import Description from "./components/Description/Description";
import DonutSection from "./components/Donut/DonutSection/DonutSection";

function App() {
  return (
    <ThemeContextProvider>
      <Background>
        <Navbar />
        <main>
          <Description />
          <DonutSection />
        </main>
      </Background>
    </ThemeContextProvider>
  );
}

export default App;
