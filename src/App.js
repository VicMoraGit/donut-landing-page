import "./App.css";
import ThemeContextProvider from "./context/theme-context";
import Navbar from "./layout/Navbar/Navbar/Navbar";
import Background from "./layout/Background/Background";
import Description from "./components/Description/Description";
import DonutSection from "./components/Donut/DonutSection/DonutSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <ThemeContextProvider>
      <Background donut_section={true}>
        <Navbar />
        <main>
          <Description />
          <DonutSection />
        </main>
      </Background>
      <WhyChooseUs id="WhyChooseUs" />

      <Background reversed={true}>
        <Feedback />
      </Background>
    </ThemeContextProvider>
  );
}

export default App;
