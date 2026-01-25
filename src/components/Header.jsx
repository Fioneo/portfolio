import { useState } from "react";
import { Menu, Moon, Globe, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  ru: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
  },
};

function Header({
  theme,
  language,
  onThemeToggle,
  onLanguageToggle,
  scrollToSection,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-mono cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          <span className="text-primary">&lt;</span>
          Fioneo.dev
          <span className="text-primary">/&gt;</span>
        </motion.div>
        <nav className="hidden md:flex gap-8">
          {Object.entries(t).map(([key, value], index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => scrollToSection(key)}
              className="text-sm hover:text-primary transition-colors relative group font-medium"
            >
              {value}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={onLanguageToggle}
            className="p-2 rounded-lg hover:bg-bg transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={onThemeToggle}
            className="p-2 rounded-lg hover:bg-bg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-bg transition-colors md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border md:hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {Object.entries(t).map(([key, value], index) => (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(key)}
                    className="text-left text-base hover:text-primary transition-colors py-2 border-l-2 border-transparent hover:border-primary pl-4"
                  >
                    <span className="font-mono text-primary mr-2">{">"}</span>
                    {value}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Header;
