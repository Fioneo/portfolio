import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
const translations = {
  en: {
    greeting: "Hi, I'm",
    role: "Frontend Developer",
    description: "Building amazing web experiences with modern technologies",
    cta: "View My Work",
    terminal: "$ npm run dev",
  },
  ru: {
    greeting: "Привет, я",
    role: "Фронтенд Разработчик",
    description:
      "Создаю потрясающие веб-приложения с современными технологиями",
    cta: "Посмотреть работы",
    terminal: "$ npm run dev",
  },
};
function scrollToProjects() {
  const element = document.getElementById("projects");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function Hero({ language, scrollToSection }) {
  const t = translations[language];
  return (
    <section
      id="home"
      className="flex items-center justify-center px-8 pt-20 min-h-screen"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-muted text-lg mb-2">{t.greeting}</span>
            <h1 className="text-2xl font-medium mb-2">
              <span className="text-primary font-mono mb-2">const</span>{" "}
              developer =
              <span className="text-foreground text-4xl md:text-5xl font-bold block mt-2">
                {" "}
                <Typewriter
                  options={{
                    strings: t.role,
                    autoStart: true,
                    delay: 50,
                    loop: false,
                  }}
                />
              </span>
            </h1>
            <p className="text-muted text-lg mb-4">{t.description}</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                {t.cta}
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-4"
            >
              {[
                { icon: Github, href: "https://github.com/Fioneo" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/fioneo/" },
                { icon: Mail, href: "mailto:fioneo.dev@email.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  target="_blank"
                  className="p-3 rounded-lg bg-bg hover:bg-bg/80 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-[#333]">
              <div className="bg-[#323233] px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <Terminal size={14} className="text-[#999]" />
                  <div className="text-[#999] text-sm">terminal</div>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-[#4ec9b0] flex gap-2 items-center">
                  <span className="text-[#dcdcaa]">~/portfolio</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {t.terminal}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="mt-4 text-[#858585]"
                >
                  <div className="text-[#4ec9b0]">
                    {">"} Local: http://localhost:3000
                  </div>
                  <div className="text-[#d4d4d4] mt-2">✓ Ready in 234ms</div>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg"
            >
              <span className="font-mono text-sm">&lt;/&gt;</span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 bg-bg p-3 rounded-lg shadow-lg"
            >
              <span className="font-mono text-sm">{"{ }"}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
