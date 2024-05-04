import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className=" font-poppins">
      <NavBar />
      <Hero />
      <SocialLinks/>
    </div>
  );
}

export default App;
