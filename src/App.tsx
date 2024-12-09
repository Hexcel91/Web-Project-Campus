import { Route, Routes } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Archive from "./pages/Archive";
import Gallery from "./pages/Gallery";
import Skill from "./pages/Skill";
function App() {
 

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
