import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
