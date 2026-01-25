import Header from "./components/Header";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import { ScrollToTop } from "./components/ScrollToTop";
import Projects from "./components/Projects";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { AnimatePresence } from "motion/react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState(() => {
    const key = localStorage.getItem("theme");
    return key ? key : "light";
  });
  const [language, setLanguage] = useState("ru");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  function toggleLanguage() {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  }
  function handleLoadingComplete() {
    setLoading(false);
  }
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Header
            theme={theme}
            language={language}
            onThemeToggle={toggleTheme}
            onLanguageToggle={toggleLanguage}
            scrollToSection={scrollToSection}
          />
          <main>
            <Hero language={language} scrollToSection={scrollToSection} />
            <About language={language} />
            <Projects language={language} />
            <Contact language={language} />
          </main>
          <Footer language={language} />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
